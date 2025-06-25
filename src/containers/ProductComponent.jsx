import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/actions/productActions";

const ProductComponent = () => {
    const [isButtonDisabled, setButtonDisabled] = useState([]);

    const dispatch = useDispatch();
    const allProduct = useSelector((state) => state.allItems);
    const products = allProduct.items;
    let addedProducts = [];
    const productTitleKeys = { 'Air-Purifying': 'Air Purifying Plants', 'Aromatic-Fragrant': 'Aromatic Fragrant Plants' };
    const addToCart = (product) => {
        dispatch(addItem(product));
        getAddedProducts(product.id);
    }

    const getAddedProducts = (id) => {
        const getAddedProducts = allProduct.add_item.map(addProduct => addProduct?.id);
        addedProducts = [...addedProducts, ...getAddedProducts, id];
        setButtonDisabled(addedProducts);
    }

    useEffect(() => {
        getAddedProducts(0);
    }, []);

    const productList = Object.keys(products).map(key => {
        return (
            <div className="row" key={key}>
                <div className="column hedding-main">
                    <hr className='top-hr' />
                    <h2 className='hedding'>{productTitleKeys[key]}</h2>
                    <hr className='bottom-hr' />
                </div>
                {products[key].map(product => {
                    const { id, title, price, description, image } = product;
                    let isDisabled = isButtonDisabled.includes(id);
                    return (
                        <div className="four product-list wide" key={id}>
                            <div className="ui link cards">
                                <div className="card">
                                    <div className="image">
                                        <img src={image} alt="{title}" />
                                    </div>
                                    <div className="content">
                                        <div className="header">{title}</div>
                                        <div className="meta price">$ {price}</div>
                                        <div className="meta description">{description}</div>
                                        <div className="visible content">
                                            <button
                                                disabled={isDisabled}
                                                onClick={() => addToCart(product)}
                                                className="green ui button">
                                                {isDisabled ? "Added To Cart" : "Add To Cart"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    });
    return <>{productList}</>
};



export default ProductComponent;
