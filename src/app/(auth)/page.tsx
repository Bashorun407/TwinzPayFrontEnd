"use client";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { toast } from "sonner";
import Link from "next/link";
import * as Yup from "yup";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/core";
import { PASSWORD } from "@/config/regex";

import { mockSignIn } from "@/__mock__/api";

const schema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().matches(PASSWORD, "Password must be at least 6 characters").required("Password is required"),
});

const Page = () => {
  const { signin } = useAuthStore();
  const router = useRouter();

  const { handleChange, handleSubmit } = useFormik<Yup.InferType<typeof schema>>({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      mockSignIn(values)
        .then((response) => {
          if (response) {
            signin(response, {});
            const path = response.user.role === "admin" ? "/admin" : "/overview";
            toast.success("Signed in successfully");
            router.push(path);
          }
        })
        .catch((error) => {
          console.error({ error });
        });
    },
    validationSchema: schema,
  });

  return (
    <div className="w-full space-y-10 sm:w-100">
      <div>
        <p className="text-2xl font-bold">Welcome Back!</p>
        <p className="text-sm text-gray-600">Sign in to continue to TwinzPay</p>
      </div>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <Input name="email" onChange={handleChange} type="email" />
        <div className="space-y-2">
          <Input name="password" onChange={handleChange} type="password" />
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Checkbox />
              <span className="text-sm">Remember me</span>
            </div>
            <Link className="text-sm underline" href="/forgot-password">
              Forgot password?
            </Link>
          </div>
        </div>
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600">
        Don&apos;t have an account yet?{" "}
        <Link className="text-foreground text-sm underline" href="/signup">
          Create account
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
