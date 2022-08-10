import React from 'react';
import Product from './Product';

const Products = ({products}) => {
    return (
  <section className="text-gray-600 body-font mt-[-50px] pb-4">
  <div className="container-md md:px-10  mx-auto ">
    <div className="grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                {products.map((product)=><Product key={product.id} product={product}>

                </Product>)}

    </div>
    </div>
    </section>
    );
};

export default Products;