
"use client";

import { useState } from "react";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { updateUser, useSession } from "@/lib/auth-client";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    // setLoading(true);
    // setMessage("");
    // setError("");

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
const resData = await updateUser({
    name:userData.name
})
console.log(resData)
    // try {
    //   const resData = await updateUser({
    //     name: userData.name,
    //   });

    //   console.log(resData);

    //   if (resData?.error) {
    //     setError(
    //       resData.error.message || "নাম আপডেট করা যায়নি"
    //     );
    //   } else {
    //     setMessage("নাম সফলভাবে আপডেট হয়েছে!");
    //   }
    // } catch (err) {
    //   setError("নাম আপডেট করতে সমস্যা হয়েছে");
    //   console.error(err);
    // } finally {
    //   setLoading(false);
    // }
  };
const {data:session} = useSession()
  return (
    <div className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-md">

        {/* Header */}
        <div className="mb-5">
          <h1 className="text-xl font-bold text-[#26352d]">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Information Card */}
        <div className="mb-4 flex flex-col gap-4 rounded-xl border border-[#e2e9e2] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex min-w-0 items-center gap-3">
         

            <div className="min-w-0">
              <h2 className="truncate text-xl font-semibold text-[#26352d]">
               {session?.user?.name}
              </h2>

              <p className="truncate text-xs text-gray-500">
                {session?.user?.email}
              </p>
            </div>
          </div>

         <Link href='/sign-up'>
          <Button
            type="button"
    
            className="w-full rounded-md border border-red-400 bg-transparent px-3 py-2 text-xs font-medium text-red-500 sm:w-auto"
          >
            {/* <span className="mr-1">↻</span> */}
            সাইন আউট
          </Button>
         </Link>
        </div>

        {/* Update Form Card */}
        <div className="rounded-xl border border-[#e2e9e2] bg-[#fbfdfb] p-4 sm:p-5">

          <h2 className="mb-5 text-sm font-semibold text-[#26352d]">
            তথ্য
          </h2>

          <Form
            className="flex w-full flex-col gap-3"
            onSubmit={handleUpdateUser}
          >
            <Fieldset className="w-full">
              <FieldGroup>
                <TextField
                  name="name"
                  isRequired
                  validate={(value) => {
                    if (!value || value.trim().length < 3) {
                      return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
                    }

                    return null;
                  }}
                >
                  <Label className="mb-1 text-xs text-gray-700">
                    নাম
                  </Label>

                  <Input
                    id="name"
                    placeholder="আপনার নাম লিখুন"
                    className="h-10 w-full rounded-md border border-[#e1e9e1] bg-transparent px-3 text-sm outline-none focus:border-green-600"
                  />

                  <FieldError />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions className="mt-3 w-full">
                <Button
                  type="submit"
                  isDisabled={loading}
                  className="w-full rounded-md bg-[#078b43] py-2.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#067637] disabled:opacity-60"
                >
                  {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>

          {message && (
            <p className="mt-3 text-sm text-green-700">
              {message}
            </p>
          )}

          {error && (
            <p className="mt-3 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
