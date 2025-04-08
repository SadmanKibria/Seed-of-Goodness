"use client";

import { useState } from "react";
import Image from "next/image";
import { CreditCard, Landmark } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BankTransferDetails } from "@/components/bank-transfer-details";
import { formatCurrency } from "@/lib/utils";

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
 * - This is a simplified version for demonstration purposes
 * - Actual payment processing will be implemented when client provides details
 */
export function PaymentMethods({
  amount,
  cause,
  onPaymentComplete,
}: PaymentMethodsProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStripePayment = () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      if (onPaymentComplete) onPaymentComplete();
      alert("Payment successful! Thank you for your donation.");
    }, 2000);
  };

  const handlePayPalPayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      if (onPaymentComplete) onPaymentComplete();
      alert("PayPal payment successful! Thank you for your donation.");
    }, 2000);
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
            Pay securely using your PayPal account. This is a demo version -
            actual PayPal integration will be added soon.
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
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
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
              <span className="flex items-center justify-center">
                <Image
                  src="/paypal-white.png"
                  alt="PayPal"
                  width={80}
                  height={20}
                  className="h-5 w-auto"
                />
              </span>
            )}
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="bank" className="mt-4">
        <div className="bg-brand-green-50 p-4 rounded-lg border border-brand-green-200 mb-4">
          <p className="text-sm text-brand-brown-700">
            Make a direct bank transfer to our account. Please use your name and
            &quot;&quot;{cause} &quot;&quot; as the reference.
          </p>
        </div>

        <BankTransferDetails />
      </TabsContent>
    </Tabs>
  );
}
