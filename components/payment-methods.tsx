import { Landmark } from "lucide-react";
import { BankTransferDetails } from "@/components/bank-transfer-details";
import { formatCurrency } from "@/lib/utils";

interface PaymentMethodsProps {
  amount: number;
  cause: string;
}

/**
 * Payment Methods Component
 *
 * This component displays bank transfer details as the primary payment method
 * as requested by the client. Online payment options will be added in the future.
 */
export function PaymentMethods({ amount, cause }: PaymentMethodsProps) {
  return (
    <div className="w-full space-y-6">
      <div className="bg-brand-green-50 p-6 rounded-lg border border-brand-green-200">
        <div className="flex items-center gap-3 mb-4">
          <Landmark className="h-5 w-5 text-brand-green-600" />
          <h3 className="font-bold text-brand-brown-800">Bank Transfer</h3>
        </div>

        <p className="text-brand-brown-700 mb-4">
          Please make a direct bank transfer to our account using the details
          below. Include your name and &quot;{cause}
          &quot; as the reference.
        </p>

        <div className="flex items-center justify-between text-sm text-brand-brown-700 border-b border-brand-brown-200 pb-3 mb-4">
          <span>Donation amount:</span>
          <span className="font-bold">{formatCurrency(amount)}</span>
        </div>

        <BankTransferDetails />

        <div className="mt-6 text-sm text-brand-brown-600">
          <p>
            After making your transfer, please email us at{" "}
            <span className="font-medium">seedofgood2024@gmail.com</span> with
            your donation details so we can acknowledge your contribution.
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-brand-brown-200 text-center">
        <p className="text-brand-brown-600 text-sm">
          Online payment options will be available soon. For now, we accept
          donations via bank transfer only.
        </p>
      </div>
    </div>
  );
}
