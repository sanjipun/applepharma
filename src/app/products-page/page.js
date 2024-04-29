'use client';
import Breadcrumbs from "@/components/Breadcrumbs";
import HeaderTwo from "@/components/Header/HeaderTwo";
import { Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";
import Products from "@/components/Product-card/products";

export default function ProductGrid() {
    const [name, setName] = useState(null);
    const takeName = (data) => {
        setName(data);
    };
    // console.log(products, "products");
    return (
        <>
            <HeaderTwo />
            <Breadcrumbs title={name} menuText="Product Image" />
            <Suspense fallback={<Spinner animation='border' variant='primary'></Spinner>}>
                <Products takeName={takeName} />
            </Suspense>
        </>
    );
}
