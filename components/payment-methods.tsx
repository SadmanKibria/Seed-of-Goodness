"use client";

import { useState } from "react";
import Image from "next/image";
import { CreditCard, Landmark } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BankTransferDetails } from "@/components/bank-transfer-details";
import { formatCurrency } from "@/lib/seo-config";

interface PaymentMethodsProps {
  amount: number;
  cause: string;
  onPaymentComplete?: () => void;
}

/**
 * Payment Methods Component
 *
 * This component handles different payment options:
 * 1. Credit/Debit Card (via Stripe)
 * 2. PayPal
 * 3. Bank Transfer
 *
 * Implementation Notes:
 * - For production, you'll need to set up Stripe and PayPal accounts
 * - Replace the placeholder functions with actual API calls
 * - Add proper error handling for payment failures
 */
export function PaymentMethods({
  amount,
  cause,
  onPaymentComplete,
}: PaymentMethodsProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  /**
   * Handle Stripe payment
   *
   * In production:
   * 1. Call your backend API to create a payment intent
   * 2. Use Stripe Elements or Checkout for secure card processing
   * 3. Handle the payment result
   *
   * Implementation Guide:
   * - Install @stripe/stripe-js and @stripe/react-stripe-js
   * - Create a server endpoint to generate payment intents
   * - Use Stripe Elements for PCI-compliant card collection
   */
  const handleStripePayment = () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      if (onPaymentComplete) onPaymentComplete();
      alert("Payment successful! Thank you for your donation.");
    }, 2000);

    // PRODUCTION CODE WOULD LOOK LIKE:
    /*
    async function processPayment() {
      try {
        // 1. Create payment intent on your server
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount, cause }),
        });
        
        const { clientSecret } = await response.json();
        
        // 2. Confirm payment with Stripe.js
        const stripe = await loadStripe('YOUR_PUBLISHABLE_KEY');
        const { error } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: { name: 'Customer Name' },
          },
        });
        
        // 3. Handle result
        if (error) {
          console.error(error);
          alert('Payment failed: ' + error.message);
        } else {
          if (onPaymentComplete) onPaymentComplete();
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred during payment processing');
      } finally {
        setIsProcessing(false);
      }
    }
    
    processPayment();
    */
  };

  /**
   * Handle PayPal payment
   *
   * In production:
   * 1. Initialize PayPal Smart Buttons
   * 2. Handle the payment approval
   * 3. Verify the payment on your server
   *
   * Implementation Guide:
   * - Create a PayPal developer account
   * - Install @paypal/react-paypal-js
   * - Use PayPalButtons component for integration
   */
  const handlePayPalPayment = () => {
    // This is just a placeholder for demonstration
    alert("PayPal integration would be implemented here");

    // PRODUCTION CODE WOULD LOOK LIKE:
    /*
    <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                  currency_code: "GBP"
                },
                description: `Donation to ${cause}`
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            if (onPaymentComplete) onPaymentComplete();
          });
        }}
      />
    </PayPalScriptProvider>
    */
  };

  return (
    <Tabs defaultValue="card" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="card" className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          <span>Card</span>
        </TabsTrigger>
        <TabsTrigger value="paypal" className="flex items-center gap-2">
          <Image
            src="/images/paypal-icon.png"
            alt="PayPal"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <span>PayPal</span>
        </TabsTrigger>
        <TabsTrigger value="bank" className="flex items-center gap-2">
          <Landmark className="h-4 w-4" />
          <span>Bank</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="card" className="mt-4 space-y-4">
        <div className="bg-brand-green-50 p-4 rounded-lg border border-brand-green-200">
          <p className="text-sm text-brand-brown-700">
            Secure payment processing by Stripe. Your card details are never
            stored on our servers.
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-brand-brown-700 border-b pb-2 mb-4">
          <span>Payment amount:</span>
          <span className="font-bold">{formatCurrency(amount)}</span>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleStripePayment}
            className="bg-brand-green-600 hover:bg-brand-green-700 text-white w-full py-6"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                <CreditCard className="mr-2 h-4 w-4" />
                Pay with Card
              </span>
            )}
          </Button>
        </div>

        <div className="flex items-center justify-center mt-4">
          <div className="flex gap-2">
            <Image src="/images/visa.png" alt="Visa" width={40} height={25} />
            <Image
              src="/images/mastercard.png"
              alt="Mastercard"
              width={40}
              height={25}
            />
            <Image
              src="/images/amex.png"
              alt="American Express"
              width={40}
              height={25}
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="paypal" className="mt-4 space-y-4">
        <div className="bg-brand-green-50 p-4 rounded-lg border border-brand-green-200">
          <p className="text-sm text-brand-brown-700">
            Pay securely using your PayPal account. You'll be redirected to
            PayPal to complete your payment.
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-brand-brown-700 border-b pb-2 mb-4">
          <span>Payment amount:</span>
          <span className="font-bold">{formatCurrency(amount)}</span>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handlePayPalPayment}
            className="bg-[#0070ba] hover:bg-[#003087] text-white w-full py-6"
          >
            <span className="flex items-center">
              <Image
                src="/images/paypal-white.png"
                alt="PayPal"
                width={80}
                height={20}
                className="h-5 w-auto"
              />
            </span>
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="bank" className="mt-4">
        <div className="bg-brand-green-50 p-4 rounded-lg border border-brand-green-200 mb-4">
          <p className="text-sm text-brand-brown-700">
            Make a direct bank transfer to our account. Please use your name and
            "{cause}" as the reference.
          </p>
        </div>

        <BankTransferDetails />
      </TabsContent>
    </Tabs>
  );
}
