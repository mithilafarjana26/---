'use client'
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const UpdateProfileLink = () => {
     const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            
<button
  className="btn btn-success font-bold"
  onClick={async () => {
    await signOut();
    setIsMenuOpen(false);
    router.push("/sign-up");
    router.refresh();
  }}
>
  LogOut
</button>

        </div>
    );
};

export default UpdateProfileLink;