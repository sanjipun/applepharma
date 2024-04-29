import { PRODUCT_CATEGORY_URL, PRODUCT_URL } from "../routes/product-routes";

export async function getProductsData() {
    try {
        const response = await fetch(PRODUCT_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}

export async function getProductDetailsWithId(id) {
    try {
        const response = await fetch(`${PRODUCT_URL}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}

export async function getProductsCategory() {
    try {
        const response = await fetch(PRODUCT_CATEGORY_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}


export async function getProductsCategoryWithId(id) {
    try {
        // console.log(id)
        const response = await fetch(`${PRODUCT_URL}/?category=${encodeURIComponent(id)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}