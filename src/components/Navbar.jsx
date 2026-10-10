
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
const {data:session,isPending} = useSession()
if(isPending){
  return <span className="loading loading-ball loading-xl"></span>

}
const authLinks= <>
 {
  session?.user?<>
  <span>Welcome {session?.user?.name}</span>
  <button onClick={() =>signOut()}>LogOut</button>
  </>:<><Link
              href="/sign-in"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-green-700"
            >
              Login
            </Link>

           <Link href='/sign-up'>
            <Button
            
              className="rounded-lg bg-green-700 px-5 font-semibold text-white shadow-sm transition hover:bg-green-800"
            >
              Sign Up
            </Button>
           </Link>
            
            </>
 }
</>
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1880px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-3">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white">
              <span className="text-xl font-bold">ব</span>
            </div>

            <div className="min-w-0">
              <h1 className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl">
                বাজার দর
              </h1>
              <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">
                {date}
              </p>
            </div>
          </Link>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 sm:flex">
           {authLinks}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 sm:hidden"
          >
            {isMenuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-3 sm:hidden">
            <div className="flex flex-col gap-2">
             {authLinks}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
