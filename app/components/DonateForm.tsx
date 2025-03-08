import React from 'react';

const DonateForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Support Our Cause</h2>
      <div className="space-y-6">
        <div className="text-center">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">M-PESA Payment Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Paybill Number</p>
                <p className="text-2xl font-bold text-green-700">522533</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Account Number</p>
                <p className="text-2xl font-bold text-green-700">7894453</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Thank you for your support! Your contribution helps us make a difference in our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
