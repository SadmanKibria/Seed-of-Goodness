"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { Card, CardContent } from "@/components/ui/card";

export function DonationForm() {
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [cause, setCause] = useState("gaza");
  const [email, setEmail] = useState("");

  const handleAmountChange = (value: string) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount("custom");
  };

  const isFormValid = () => {
    if (
      amount === "custom" &&
      (!customAmount || Number.parseFloat(customAmount) <= 0)
    ) {
      return false;
    }
    return email.trim() !== "";
  };

  return (
    <Card className="bg-white shadow-xl border-brand-brown-200 rounded-xl overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-6 border border-red-100 flex items-center">
          <span className="font-semibold">Urgent Appeal:</span>
          <span className="ml-2">Gaza Emergency Relief</span>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6 text-brand-brown-700">
          Donate Now
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-base text-brand-brown-700">
              Select a Cause
            </Label>
            <Select value={cause} onValueChange={setCause}>
              <SelectTrigger className="bg-white border-2 border-brand-brown-200 h-12 rounded-lg hover:border-brand-green-500 transition-colors">
                <SelectValue placeholder="Select a cause" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gaza">Gaza Emergency Relief</SelectItem>
                <SelectItem value="water">Clean Water Initiative</SelectItem>
                <SelectItem value="food">Food Security Program</SelectItem>
                <SelectItem value="medical">Medical Aid</SelectItem>
                <SelectItem value="hygiene">Hygiene Products</SelectItem>
                <SelectItem value="shelter">Clothing & Shelter</SelectItem>
                <SelectItem value="education">Education Support</SelectItem>
                <SelectItem value="general">General Fund</SelectItem>
              </SelectContent>
            </Select>
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
                  id="home-amount-25"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="home-amount-25"
                  className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                >
                  £25
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="50"
                  id="home-amount-50"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="home-amount-50"
                  className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                >
                  £50
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="100"
                  id="home-amount-100"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="home-amount-100"
                  className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                >
                  £100
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="custom"
                  id="home-amount-custom"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="home-amount-custom"
                  className="flex flex-col items-center justify-between rounded-lg border-2 border-brand-brown-200 bg-white p-4 hover:bg-brand-green-50 hover:border-brand-green-300 peer-data-[state=checked]:border-brand-green-500 peer-data-[state=checked]:bg-brand-green-50 [&:has([data-state=checked])]:border-brand-green-500 [&:has([data-state=checked])]:bg-brand-green-50 transition-all duration-200"
                >
                  Custom
                </Label>
              </div>
            </RadioGroup>

            {amount === "custom" && (
              <div className="mt-4">
                <Label
                  htmlFor="home-custom-amount"
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
                    id="home-custom-amount"
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
            <Label className="text-base text-brand-brown-700">Email</Label>
            <Input
              type="email"
              placeholder="Your email"
              className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Link
            href={`/donate?cause=${cause}&amount=${
              amount === "custom" ? customAmount : amount
            }&email=${encodeURIComponent(email)}`}
            className={`${
              !isFormValid() ? "pointer-events-none opacity-70" : ""
            }`}
          >
            <Button
              className="w-full h-12 text-base bg-brand-green-600 hover:bg-brand-green-700 text-white transition-all duration-300 shadow-md hover:shadow-lg rounded-lg"
              disabled={!isFormValid()}
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">
              If you can&apos;t donate, please share our message. You will get
              the same reward as the donators إن شاء الله.
            </p>
            <div className="flex justify-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-8 px-3 text-xs border-brand-brown-200 hover:bg-brand-green-50 hover:text-brand-green-700"
              >
                Share on Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-8 px-3 text-xs border-brand-brown-200 hover:bg-brand-green-50 hover:text-brand-green-700"
              >
                Share on Twitter
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
