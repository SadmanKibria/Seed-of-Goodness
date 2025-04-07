"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentMethods } from "@/components/payment-methods";
import { BankTransferDetails } from "@/components/bank-transfer-details";
import { QuoteCard } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { formatCurrency, generateDonationSchema } from "@/lib/seo-config";

// Generate JSON-LD structured data for donation page
const donationSchema = generateDonationSchema();

export default function DonatePage() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [cause, setCause] = useState(searchParams.get("cause") || "gaza");
  const [donationType, setDonationType] = useState("one-time");
  const [email, setEmail] = useState(searchParams.get("email") || "");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isProcessing] = useState(false);
  //const [setIsProcessing] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);

  // Initialize form values from URL parameters
  useEffect(() => {
    if (searchParams.get("cause")) {
      setCause(searchParams.get("cause") || "gaza");
    }
    if (searchParams.get("amount")) {
      const paramAmount = searchParams.get("amount") || "50";
      if (["25", "50", "100", "250", "500"].includes(paramAmount)) {
        setAmount(paramAmount);
      } else {
        setAmount("custom");
        setCustomAmount(paramAmount);
      }
    }
    if (searchParams.get("email")) {
      setEmail(searchParams.get("email") || "");
    }
  }, [searchParams]);

  // Handle amount selection
  const handleAmountChange = (value: string) => {
    setAmount(value);
    setCustomAmount("");
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount("custom");
  };

  // Get the final donation amount
  const getDonationAmount = () => {
    if (amount === "custom" && customAmount) {
      return Number.parseFloat(customAmount);
    }
    return Number.parseFloat(amount);
  };

  // Validate form fields
  const isFormValid = () => {
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      (amount !== "custom" ||
        (customAmount && Number.parseFloat(customAmount) > 0))
    );
  };

  // Proceed to payment section
  const handleProceedToPayment = () => {
    if (!isFormValid()) return;
    setShowPaymentMethods(true);

    // Scroll to payment section
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + 200,
        behavior: "smooth",
      });
    }, 100);
  };

  // Available causes
  const causeOptions = [
    { value: "gaza", label: "Gaza Emergency Relief" },
    { value: "water", label: "Clean Water Initiative" },
    { value: "food", label: "Food Security Program" },
    { value: "medical", label: "Medical Aid" },
    { value: "hygiene", label: "Hygiene Products" },
    { value: "shelter", label: "Clothing & Shelter" },
    { value: "education", label: "Education Support" },
    { value: "general", label: "General Fund" },
  ];

  // Get cause label from value
  const getCauseLabel = (value: string) => {
    const option = causeOptions.find((option) => option.value === value);
    return option ? option.label : "General Fund";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      {/* JSON-LD structured data */}
      <Script
        id="donation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donationSchema) }}
      />

      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 mb-2">
              Urgent Appeal
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-brown-800">
              Make a Donation
            </h1>
            <p className="max-w-[700px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your generosity can make a real difference in the lives of those
              in need.
            </p>
          </div>

          <QuoteCard />

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start max-w-5xl mx-auto mt-8">
            <Card className="shadow-lg border-brand-brown-200 rounded-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-brand-brown-800">
                  Donation Details
                </CardTitle>
                <CardDescription className="text-brand-brown-600">
                  Choose how you would like to contribute
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-base text-brand-brown-700">
                    Select a Cause
                  </Label>
                  <Select value={cause} onValueChange={setCause}>
                    <SelectTrigger className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500">
                      <SelectValue placeholder="Select a cause" />
                    </SelectTrigger>
                    <SelectContent>
                      {causeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-base text-brand-brown-700">
                    Donation Type
                  </Label>
                  <Tabs
                    value={donationType}
                    onValueChange={setDonationType}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2 h-12 rounded-lg">
                      <TabsTrigger
                        value="one-time"
                        className="text-base rounded-l-lg"
                      >
                        One-time
                      </TabsTrigger>
                      <TabsTrigger
                        value="monthly"
                        className="text-base rounded-r-lg"
                      >
                        Monthly
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="space-y-2">
                  <Label className="text-base text-brand-brown-700">
                    Donation Amount
                  </Label>
                  <RadioGroup
                    value={amount}
                    onValueChange={handleAmountChange}
                    className="grid grid-cols-3 gap-4"
                  >
                    <div>
                      <RadioGroupItem
                        value="25"
                        id="amount-25"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="amount-25"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                      >
                        £25
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="50"
                        id="amount-50"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="amount-50"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                      >
                        £50
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="100"
                        id="amount-100"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="amount-100"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                      >
                        £100
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="250"
                        id="amount-250"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="amount-250"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                      >
                        £250
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="500"
                        id="amount-500"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="amount-500"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                      >
                        £500
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="custom"
                        id="amount-custom"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="amount-custom"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                      >
                        Custom
                      </Label>
                    </div>
                  </RadioGroup>

                  {amount === "custom" && (
                    <div className="mt-4">
                      <Label
                        htmlFor="custom-amount"
                        className="text-brand-brown-700"
                      >
                        Enter Amount
                      </Label>
                      <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">£</span>
                        </div>
                        <Input
                          type="number"
                          id="custom-amount"
                          className="pl-7 h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                          placeholder="0.00"
                          min="1"
                          step="1"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-base text-brand-brown-700">
                    Personal Information
                  </Label>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="first-name"
                          className="text-brand-brown-700"
                        >
                          First Name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="First Name"
                          className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="last-name"
                          className="text-brand-brown-700"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Last Name"
                          className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-brand-brown-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-brand-brown-200 rounded-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-brand-brown-800">
                  Donation Summary
                </CardTitle>
                <CardDescription className="text-brand-brown-600">
                  Review your donation details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cause:</span>
                    <span className="font-medium">{getCauseLabel(cause)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Donation Type:
                    </span>
                    <span className="font-medium capitalize">
                      {donationType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-medium">
                      {formatCurrency(getDonationAmount())}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>{formatCurrency(getDonationAmount())}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {donationType === "monthly"
                      ? "Recurring monthly donation"
                      : "One-time donation"}
                  </p>
                </div>

                <div className="space-y-4">
                  {!showPaymentMethods ? (
                    <>
                      <Button
                        className="w-full h-12 bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        disabled={!isFormValid() || isProcessing}
                        onClick={handleProceedToPayment}
                      >
                        {isProcessing ? "Processing..." : "Proceed to Payment"}
                      </Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or
                          </span>
                        </div>
                      </div>

                      <BankTransferDetails />
                    </>
                  ) : (
                    <PaymentMethods
                      amount={getDonationAmount()}
                      cause={cause}
                      onPaymentComplete={() => {
                        // Handle payment completion
                        alert("Thank you for your donation!");
                      }}
                    />
                  )}

                  <div className="text-center text-xs text-muted-foreground">
                    <p>
                      Your donation is tax-deductible to the extent allowed by
                      law.
                    </p>
                    <p className="mt-1">
                      By proceeding with your donation, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="underline underline-offset-2 text-brand-green-600 hover:text-brand-green-700"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="underline underline-offset-2 text-brand-green-600 hover:text-brand-green-700"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
