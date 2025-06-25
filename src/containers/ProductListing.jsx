import Header from './Header'
import React, { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import productData from "../assets/data/paradise_nursery_data.json";
import { useDispatch } from 'react-redux';
import { setItems } from "../redux/actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch();
    const getProducts = () => {
        const productList = JSON.parse(JSON.stringify(productData));
        dispatch(setItems(productList.items));
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Header />
            <div className="ui grid products">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing;