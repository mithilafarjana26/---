
"use client";

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const SignUpPage = () => {
 const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

const onSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setErrorMessage("");

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.error(
        error.message || "এই ইমেইল দিয়ে আগে থেকেই অ্যাকাউন্ট আছে!"
      );
      return;
    }

    toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
    router.push("/sign-in");
  } catch (error) {
    toast.error(
      error.message || "অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।"
    );
    console.error(error);
  } finally {
    setLoading(false);
  }
};






const handleGoogleBtn = async () => {
  try {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  } catch (error) {
    const message = "Google দিয়ে সাইন আপ করা যায়নি।";
    setErrorMessage(message);
    toast.error(message);
    console.error(error);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f5f1] px-4 py-8 sm:py-12">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#26352b]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="text-xs sm:text-sm text-[#778078] mt-2">
            বিনা ঝামেলায় সাইন আপ করে সব বিস্তারিত দাম দেখুন
          </p>
        </div>

        {/* Signup Card */}
        <div className="bg-[#fbfcfb] rounded-2xl border border-[#dfe8e1] p-5 sm:p-7">

          {/* Signup Form */}
          <Form
            className="flex w-full flex-col gap-4"
            onSubmit={onSubmit}
          >

            {/* Name */}
            <TextField
              isRequired
              name="name"
              className="w-full"
              validate={(value) => {
                if (value.length < 3) {
                  return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
                }

                return null;
              }}
            >
              <Label className="text-sm font-medium text-[#354238]">
                নাম
              </Label>

              <Input
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full h-10 rounded-lg border border-[#dfe8e1] bg-transparent px-3 text-sm text-[#26352b] outline-none focus:border-[#07883f]"
              />

              <FieldError />
            </TextField>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    value
                  )
                ) {
                  return "সঠিক ইমেইল ঠিকানা লিখুন";
                }

                return null;
              }}
            >
              <Label className="text-sm font-medium text-[#354238]">
                ইমেইল
              </Label>

              <Input
                placeholder="you@example.com"
                className="w-full h-10 rounded-lg border border-[#dfe8e1] bg-transparent px-3 text-sm text-[#26352b] outline-none focus:border-[#07883f]"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 8) {
                  return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                }

                if (!/[A-Z]/.test(value)) {
                  return "কমপক্ষে একটি uppercase letter দিন";
                }

                if (!/[0-9]/.test(value)) {
                  return "কমপক্ষে একটি সংখ্যা দিন";
                }

                return null;
              }}
            >
              <Label className="text-sm font-medium text-[#354238]">
                পাসওয়ার্ড
              </Label>

              <Input
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full h-10 rounded-lg border border-[#dfe8e1] bg-transparent px-3 text-sm text-[#26352b] outline-none focus:border-[#07883f]"
              />

              <Description className="text-xs text-[#7b857d]">
                কমপক্ষে ৮ অক্ষর, ১টি uppercase এবং ১টি number থাকতে হবে
              </Description>

              <FieldError />
            </TextField>

            {/* Error Message */}
            {errorMessage && (
              <p className="w-full rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            {/* Signup Button */}
            <Button
              type="submit"
              isDisabled={loading}
              className="w-full h-10 rounded-lg bg-[#07883f] text-sm font-semibold text-white shadow-md transition hover:bg-[#067334] disabled:opacity-60"
            >
              {loading
                ? "অ্যাকাউন্ট তৈরি হচ্ছে..."
                : "অ্যাকাউন্ট তৈরি করুন"}
            </Button>

          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="h-px flex-1 bg-[#dfe8e1]"></div>

            <span className="text-xs text-[#778078]">
              অথবা
            </span>

            <div className="h-px flex-1 bg-[#dfe8e1]"></div>
          </div>

          {/* Google Signup */}
          <button
            type="button"
            onClick={handleGoogleBtn}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#dfe8e1] px-3 py-2.5 text-sm font-medium text-[#354238] transition hover:bg-[#f0f5f1]"
          >
            <svg
              viewBox="0 0 48 48"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M43.6 24.5c0-1.5-.1-2.9-.4-4.3H24v8.2h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.7c3.9-3.6 6-8.9 6-15.2Z"
              />

              <path
                fill="#34A853"
                d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.7-5.1c-1.8 1.2-4 2-6.8 2-5.3 0-9.8-3.6-11.4-8.4H5.7v5.3A20 20 0 0 0 24 44Z"
              />

              <path
                fill="#FBBC05"
                d="M12.6 27.7a12 12 0 0 1 0-7.4V15H5.7a20 20 0 0 0 0 18Z"
              />

              <path
                fill="#EA4335"
                d="M24 12.9c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.9 29.5 5 24 5A20 20 0 0 0 5.7 15l6.9 5.3c1.6-4.8 6.1-7.4 11.4-7.4Z"
              />
            </svg>

            Google দিয়ে চালিয়ে যান
          </button>

          {/* Sign In Link */}
          <p className="mt-5 text-center text-xs sm:text-sm text-[#59645c]">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-[#07883f] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>

        </div>

        {/* Back to Home */}
        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-xs text-[#778078] transition hover:text-[#07883f]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>

    </div>
  );
};

export default SignUpPage;
