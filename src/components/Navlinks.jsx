
import Link from 'next/link';
import React from 'react';

const Navlinks = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const categories = await res.json()
    // console.log(categories)

    return (
        <div className='flex justify-center gap-4 w-full overflow-x-auto'>
            <ul className='flex justify-start sm:justify-center gap-4 px-3 whitespace-nowrap'>
                {
                    categories.map(ct => <li key={ct?.id} className="shrink-0">
                        <Link
                            href={`/category/${ct?.slug}`}
                            className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-600 transition-colors hover:text-blue-600"
                        >
                            <span className="text-xl">{ct?.icon}</span>
                            <span className="text-xl">{ct?.nameBn}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navlinks;
