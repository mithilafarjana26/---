import AllProductsCard from '@/components/AllProductsCard';
import React from 'react';

const CategoryDetails = async({params}) => {
    const {id} = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${id}`)
   const categories = await res.json()
   console.log(categories)
//    https://openapi.programming-hero.com/api/bazardor/products?category=chal

 const copyPriceList = [...categories]
  const priceSort = copyPriceList.sort((a,b)=>Number(a.change.pct) - Number(b.change.pct))
  console.log(priceSort)
    return (
        <div>
  {/* <h1>Category Details</h1> */}
  <div className="grid grid-cols-1 gap-3 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {priceSort.map((product) => (
      <AllProductsCard key={product.id} product={product} />
    ))}
  </div>
</div>
    );
};

export default CategoryDetails;