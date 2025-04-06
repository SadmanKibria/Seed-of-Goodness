import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/seo-config";

export function BankTransferDetails() {
  return (
    <Card className="mt-4 bg-white border-brand-brown-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-brand-brown-700">
          Bank Transfer Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1 text-sm">
          <li>
            <span className="font-medium">Account Name:</span>{" "}
            {siteConfig.charity.bankDetails.accountName}
          </li>
          <li>
            <span className="font-medium">Account No:</span>{" "}
            {siteConfig.charity.bankDetails.accountNumber}
          </li>
          <li>
            <span className="font-medium">Sort Code:</span>{" "}
            {siteConfig.charity.bankDetails.sortCode}
          </li>
          <li>
            <span className="font-medium">Bank Name:</span>{" "}
            {siteConfig.charity.bankDetails.bankName}
          </li>
        </ul>
        <p className="text-sm mt-3 text-gray-500">
          For cash donations, please contact us on {siteConfig.charity.phone}
        </p>
      </CardContent>
    </Card>
  );
}
