'use client'
import { signIn, signUp } from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

const SignUpPage = () => {
    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries())
    const {data:resData,error} = await signUp.email({
        name:data.name,
        email:data.email,
        password:data.password,
        callbackURL:'/sign-in'
    }) 
    console.log(resData,error)
    // Convert FormData to plain object
    // formData.forEach((value, key) => {
    //   data[key] = value.toString();
    // });
    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  const handleGoogleBtn =async () =>{
     const data = await signIn.social({
    provider: "google",
  });
  console.log(data)
  }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
          
          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-700">
              সাইন আপ
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </p>
          </div>

          {/* Form */}
          <Form
            className="flex w-full flex-col gap-5"
            onSubmit={onSubmit}
          >
            {/* Name */}
            <TextField
              isRequired
              name="name"
              className="w-full"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }

                return null;
              }}
            >
              <Label className="text-gray-700 font-medium">
                নাম
              </Label>

              <Input
                placeholder="আপনার নাম লিখুন"
                className="w-full"
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
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-gray-700 font-medium">
                ইমেইল
              </Label>

              <Input
                placeholder="example@gmail.com"
                className="w-full"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label className="text-gray-700 font-medium">
                পাসওয়ার্ড
              </Label>

              <Input
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                className="w-full"
              />

              <Description className="text-xs text-gray-500">
                কমপক্ষে ৮ অক্ষর, ১টি uppercase এবং ১টি number থাকতে হবে
              </Description>

              <FieldError />
            </TextField>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
              >
                সাইন আপ করুন
              </Button>

              {/* <Button
                type="reset"
                variant="secondary"
                className="w-full"
              >
                Reset
              </Button> */}
            </div>
          </Form>

         <div>
            <button onClick={handleGoogleBtn} className="btn btn-success">Google</button>
         </div>
        </div>
      </div>
    </div>
    );
};

export default SignUpPage;