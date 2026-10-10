import React from 'react';
import PriceIncrease from './PriceIncrease';

const PriceUps = async() => {
     const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");

  if (!res.ok) {
    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  }

  const products = await res.json();
  const priceIncrease = products.filter(p=>p.change.dir==="up")
  const copyPriceList = [...priceIncrease]
  const priceSort = copyPriceList.sort((a,b)=>Number(a.change.pct) - Number(b.change.pct))
//   console.log(priceIncrease)
console.log(priceSort)
    return (
        <div className=" bg-[#f0f4ef] px-4 py-6 sm:px-6 lg:px-8">

<div className='max-w-7xl mx-auto'>
    <div className="mb-5 items-center text-center">
          <h1 className="text-xl mt-10 font-bold text-slate-800 sm:text-2xl">
           আজ দাম বেড়েছে
          </h1>

          <p className="mt-1 mb-12 text-sm text-slate-500">
            মোট {priceIncrease.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {
                    priceSort.slice(0,6).map(price=><PriceIncrease price={price} key={price.id}></PriceIncrease>)
                }
            </div>
</div>
        </div>
    );
};

export default PriceUps;