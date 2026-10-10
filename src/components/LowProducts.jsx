import LowPriceCard from "./LowPriceCard";

const LowProducts = async() => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");

  if (!res.ok) {
    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  }

  const products = await res.json();
  const priceDecrease = products.filter(p=>p.change.dir==="down")
  console.log(priceDecrease)
    return (
         <div className="min-h-screen bg-[#f0f4ef] px-4 py-6 sm:px-6 lg:px-8">

<div className='max-w-7xl mx-auto'>
    <div className="mb-5">
          <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
           আজ দাম কমেছে
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            মোট {priceDecrease.length.toLocaleString("bn-BD")}টি পণ্য দাম কমেছে
          </p>
        </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {
                    priceDecrease.map(price=><LowPriceCard key={price.id} price={price}></LowPriceCard>)
                }
            </div>
</div>
        </div>
    );
};

export default LowProducts;