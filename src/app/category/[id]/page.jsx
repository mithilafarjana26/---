import AllProductsCard from '@/components/AllProductsCard';
import React from 'react';

const CategoryDetails = async({params}) => {
    const {id} = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${id}`)
   const categories = await res.json()
   console.log(categories)
   
    return (
        <div>
            <h1>Category Details</h1>
            <div className='grid grid-cols-3 max-w-7xl mx-auto'>
                {
                    categories.map(product=><AllProductsCard key={product.id} product={product}></AllProductsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;