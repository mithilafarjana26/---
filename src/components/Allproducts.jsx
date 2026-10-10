
import React from "react";
import AllProductsCard from "./AllProductsCard";

const Allproducts = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");

  if (!res.ok) {
    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  }

  const products = await res.json();
  // console.log(products)

  return (
    <section className="min-h-screen bg-[#f0f4ef] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
            সব পণ্য
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <AllProductsCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white/80 py-12 text-center">
            <p className="text-sm text-slate-500">
              কোনো পণ্য পাওয়া যায়নি।
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Allproducts;
