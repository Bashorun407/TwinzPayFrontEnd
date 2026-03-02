"use client";

import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PASSWORD } from "@/config/regex";

const schema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  name: Yup.string().required("Name is required"),
  password: Yup.string().matches(PASSWORD, "Password must be at least 8 characters").required("Password is required"),
  phone: Yup.string().optional(),
});

const Page = () => {
  const { handleChange, handleSubmit } = useFormik<Yup.InferType<typeof schema>>({
    initialValues: { email: "", name: "", password: "", phone: "" },
    onSubmit: () => {},
    validationSchema: schema,
  });

  return (
    <div className="w-full space-y-10 sm:w-100">
      <div>
        <p className="text-2xl font-bold">Create Account</p>
        <p className="text-sm text-gray-600">Create an account to continue to TwinzPay</p>
      </div>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <Input name="name" onChange={handleChange} />
        <Input name="email" onChange={handleChange} type="email" />
        <Input name="password" onChange={handleChange} type="password" />
        <Input name="phone" onChange={handleChange} type="tel" />
        <Button className="w-full" type="submit">
          Create Account
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600">
        Have an account already?{" "}
        <Link className="text-foreground text-sm underline" href="/">
          Sign in
        </Link>
      </p>
      <div className="relative flex w-full items-center justify-center before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:-translate-y-1/2 before:bg-gray-300">
        <p className="z-1! bg-white px-4 text-xs text-gray-600">OR</p>
      </div>
      <div className="space-y-4">
        <Button className="w-full" variant="outline">
          Continue with Microsoft
        </Button>
        <Button className="w-full" variant="outline">
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default Page;
