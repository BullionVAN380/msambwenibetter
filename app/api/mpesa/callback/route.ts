import { NextResponse } from 'next/server';

interface MpesaCallbackItem {
  Name: string;
  Value: string | number;
}

interface MpesaCallbackMetadata {
  Item: MpesaCallbackItem[];
}

interface MpesaStkCallback {
  ResultCode: number;
  ResultDesc: string;
  CallbackMetadata: MpesaCallbackMetadata;
}

interface MpesaCallbackBody {
  stkCallback: MpesaStkCallback;
}

interface MpesaCallback {
  Body: MpesaCallbackBody;
}

interface PaymentDetails {
  [key: string]: string | number;
}

export async function POST(req: Request) {
  try {
    const callbackData: MpesaCallback = await req.json();
    
    // Log the callback data for debugging
    console.log('M-Pesa Callback Data:', JSON.stringify(callbackData, null, 2));

    // Extract the relevant information from the callback
    const { Body } = callbackData;
    
    if (Body.stkCallback) {
      const { ResultCode, ResultDesc, CallbackMetadata } = Body.stkCallback;
      
      if (ResultCode === 0) {
        // Payment was successful
        const paymentDetails: PaymentDetails = CallbackMetadata.Item.reduce((acc: PaymentDetails, item: MpesaCallbackItem) => {
          acc[item.Name] = item.Value;
          return acc;
        }, {});

        // Here you can store the payment details in your database
        // and implement any additional business logic

        return NextResponse.json({
          success: true,
          message: 'Payment processed successfully',
          data: paymentDetails
        });
      } else {
        // Payment failed
        return NextResponse.json({
          success: false,
          message: ResultDesc
        });
      }
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid callback data'
    });

  } catch (error) {
    console.error('M-Pesa Callback Error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to process M-Pesa callback' 
      },
      { status: 500 }
    );
  }
}
