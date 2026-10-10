
"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateProfileLink = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const { error } = await signOut();

      if (error) {
        toast.error("লগআউট করা যায়নি!");
        return;
      }

      toast.success("সফলভাবে লগআউট হয়েছে!");

      setIsMenuOpen(false);
      router.push("/sign-up");
      router.refresh();
    } catch (error) {
      toast.error("লগআউট করার সময় সমস্যা হয়েছে!");
      console.error(error);
    }
  };

  return (
    <div>
      <button
        className="btn btn-success font-bold"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </div>
  );
};

export default UpdateProfileLink;
