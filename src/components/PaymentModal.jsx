import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { FaTimes } from 'react-icons/fa';

const PaymentModal = ({ amount, isOpen, onClose }) => {
  const handleToken = (token) => {
    console.log(token);
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="absolute inset-0 bg-gray-900 opacity-75 transition-opacity duration-300"></div>
      <div className={`bg-white rounded-lg z-10 p-6 w-96 shadow-xl transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Complete Your Order</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors duration-300">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-lg font-semibold text-gray-700">Total Amount:</p>
            <p className="text-xl font-bold text-indigo-700">${amount.toFixed(2)}</p>
          </div>
          <div>
            <img src="/credit-card.png" alt="Credit Card" className="h-12" />
          </div>
        </div>
        <StripeCheckout
          stripeKey="YOUR_STRIPE_PUBLIC_KEY" // Replace with your actual Stripe public key
          token={handleToken}
          amount={amount * 100} // Convert amount to cents
          currency="USD"
          name="Your Restaurant Name"
          billingAddress={true}
          zipCode={true}
          className="w-full"
        />
        <p className="mt-4 text-gray-600 text-sm">Your payment will be securely processed with Stripe.</p>
      </div>
    </div>
  );
};

export default PaymentModal;
