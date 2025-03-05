import { NextResponse } from 'next/server';

// Define types
interface DebugData {
  [key: string]: unknown;
}

const CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET;
const BUSINESS_SHORT_CODE = process.env.MPESA_SHORTCODE;
const PASSKEY = process.env.MPESA_PASSKEY;
const CALLBACK_URL = process.env.MPESA_CALLBACK_URL;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const BASE_URL = IS_PRODUCTION 
  ? 'https://api.safaricom.co.ke' 
  : 'https://sandbox.safaricom.co.ke';

// Debug function to safely log sensitive data
function debugLog(title: string, data: DebugData) {
  // Only log in development
  if (!IS_PRODUCTION) {
    console.log(`=== ${title} ===`);
    console.log(JSON.stringify(data, null, 2));
  }
}

async function getAccessToken() {
  try {
    const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
    
    debugLog('Auth String', { auth });
    
    const response = await fetch(`${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Access Token Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    debugLog('Access Token Response', data);
    return data.access_token;
  } catch (error) {
    console.error('Access Token Error:', error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    // Validate environment variables
    if (!CONSUMER_KEY || !CONSUMER_SECRET || !BUSINESS_SHORT_CODE || !PASSKEY || !CALLBACK_URL) {
      console.error('Missing environment variables:', {
        hasConsumerKey: !!CONSUMER_KEY,
        hasConsumerSecret: !!CONSUMER_SECRET,
        hasShortCode: !!BUSINESS_SHORT_CODE,
        hasPasskey: !!PASSKEY,
        hasCallbackUrl: !!CALLBACK_URL
      });
      throw new Error('Missing required environment variables');
    }

    const { phoneNumber, amount } = await req.json();
    
    debugLog('Request Data', { phoneNumber, amount });
    
    // Get access token
    const accessToken = await getAccessToken();
    
    // Generate timestamp
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    
    // Generate password
    const password = Buffer.from(`${BUSINESS_SHORT_CODE}${PASSKEY}${timestamp}`).toString('base64');
    
    const requestBody = {
      BusinessShortCode: BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: IS_PRODUCTION ? 'CustomerPayBillOnline' : 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: BUSINESS_SHORT_CODE,
      PhoneNumber: phoneNumber,
      CallBackURL: CALLBACK_URL,
      AccountReference: 'Msambweni Better Donation',
      TransactionDesc: 'Donation to Msambweni Better',
    };

    debugLog('STK Push Request', requestBody);
    
    // Prepare STK push request
    const response = await fetch(`${BASE_URL}/mpesa/stkpush/v1/processrequest`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('STK Push Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      throw new Error(`STK push failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    debugLog('STK Push Response', data);
    
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('M-PESA API Error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to process M-PESA payment',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
