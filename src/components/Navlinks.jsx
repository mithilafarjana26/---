
import Link from 'next/link';
import React from 'react';
import UpdatePrivateProfile from './UpdatePrivateProfile';

const Navlinks = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const categories = await res.json()
    // console.log(categories)

    return (
        <div className='flex justify-center  md:mt-5 gap-4 w-full overflow-x-auto'>
            <ul className='flex justify-start sm:justify-center gap-4 px-3 whitespace-nowrap'>
                {
                    categories.map(ct => <li key={ct?.id} className="shrink-0">
                        <Link
                            href={`/category/${ct?.slug}`}
                            className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-600 transition-colors hover:text-blue-600"
                        >
                            <span className="text-lg sm:text-xl">{ct?.icon}</span>
                            <span className="text-sm sm:text-xl">{ct?.nameBn}</span>
                        </Link>
                    </li>)
                }
                <UpdatePrivateProfile></UpdatePrivateProfile>
            </ul>
        </div>
    );
};

export default Navlinks;
