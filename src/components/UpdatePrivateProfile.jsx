"use client"
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const UpdatePrivateProfile = () => {
    const {data:session,isPending} = useSession()
if(isPending){
    return <span className="loading loading-spinner text-success"></span>

}
    return (
        <div>
             {
                session?.user && <Link
        href={"/profile"}
        className="shrink-0 px-3 py-1.5 text-sm sm:text-base font-medium hover:text-blue-600"
      >
        প্রোফাইল
      </Link>
             }
        </div>
    );
};

export default UpdatePrivateProfile;