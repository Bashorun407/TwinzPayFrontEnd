"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { OtpInput } from "@/components/shared";
import { Input } from "@/components/ui/input";

type Step = "email" | "otp";

const Page = () => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmitEmail = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Form submitted", { email });
    setStep("otp");
  };

  const handleSubmitOtp = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Form submitted", { email, otp });
  };

  if (step === "email") {
    return (
      <div className="w-full space-y-10 sm:w-100">
        <div>
          <p className="text-2xl font-bold">Forgot Password?</p>
          <p className="text-sm text-gray-600">Enter your email to receive a code to reset your password</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmitEmail}>
          <Input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email" value={email} />
          <Button className="w-full" type="submit">
            Send Code
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <Link className="text-foreground text-sm underline" href="/">
            Back to sign in
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-10 sm:w-100">
      <div>
        <p className="text-2xl font-bold">Enter OTP</p>
        <p className="text-sm text-gray-600">Enter the code sent to your email to reset your password</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmitOtp}>
        <OtpInput onChange={setOtp} value={otp} length={6} />
        <Button className="w-full" type="submit">
          Proceed
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600">
        Need help recovering your account?{" "}
        <Link className="text-foreground text-sm underline" href="/">
          Contact support
        </Link>
      </p>
    </div>
  );
};

export default Page;
