"use client";
import Breadcrumbs from '@/components/Breadcrumbs';
import HeaderTwo from '@/components/Header/HeaderTwo';
import ProductDetails from '@/components/product-details';
import React, { Suspense, useState } from 'react'
import { Spinner } from 'react-bootstrap';

const Page = () => {
    const [name, setName] = useState(null);
    const takeName= (data)=>{
        setName(data)
    }

    return (
        <>
            <HeaderTwo />
            <Breadcrumbs title={name} menuText="Product Details" />
            <Suspense fallback={<Spinner animation='border' variant='primary'></Spinner>} >
                <ProductDetails takeName={takeName}/>
            </Suspense>
        </>
    )
}

export default Page;