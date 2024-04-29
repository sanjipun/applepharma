"use client";
import React, { useEffect, useState } from 'react'
import ProductCard from '.'
import { useSearchParams } from 'next/navigation';
import { getProductDetailsWithId, getProductsCategoryWithId } from '@/services/api/product-api';

const Products = (props) => {
    const {takeName}= props;
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    const name = searchParams.get("name");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category || name) {
            getProductsCategoryWithId(category).then((data) => {
                setProducts(data);
                takeName(name)
            });
        }
    }, [category, name, takeName]);
    // console.log(products)
    return (
        <section className="blog grid section">
            <div className="container">
                <div className="row">
                    <div className=" col-12">
                        <div className="row">
                            {products?.results && products?.results.map((product) => (
                                <div className="col-lg-4 col-md-6 col-12" key={product.id}>
                                    <ProductCard key={product.id} productsDetails={product} />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div> */}
                </div>
            </div>
        </section>
    )
}

export default Products