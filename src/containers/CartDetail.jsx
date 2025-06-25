import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct, deleteProduct } from "../redux/actions/productActions";

const CartDetail = () => {
    const dispatch = useDispatch();
    const [isMinusDisabled, setMinusDisabled] = useState([]);

    const products = useSelector((state) => state.allProducts.add_product);
    const navigate = useNavigate();
    const pageNavigation = (path) => {
        navigate(path);
    }
    const getCartTotalAmount = () => {
        return products.reduce((sum, product) => sum + (product.quantity * product.price), 0);
    }

    const getTotalAmount = (product) => {
        return (product.quantity * product.price);
    };

    const increment = (product) => {
        dispatch(addProduct(product));
        if (product.quantity > 1) {
            const minusList = isMinusDisabled.filter(minus => minus !== product.id);
            setMinusDisabled(minusList);
        }
    }

    const decrement = (product) => {
        dispatch(removeProduct(product));
        if (product.quantity === 1) {
            setMinusDisabled([product.id]);
        }
    }

    const onDeleteProduct = (product) => {
        dispatch(deleteProduct(product));
    }

    return (
        <div>
            <Header />
            <div className="ui grid products">
                <div className="row">
                    <div className="four cart-list wide">
                        <div className="cart-detail-page">
                            <h2>Total Cart Amount : <strong className="color-red">$ {getCartTotalAmount().toFixed(2)}</strong> </h2>
                            {products.map(product => {
                                const { id, title, price, description, image } = product;
                                let isDisabled = isMinusDisabled.includes(id);
                                return (
                                    <div key={id} className="ui link cards">
                                        <div className="card">
                                            <div className="image">
                                                <img src={image} alt="{title}" />
                                            </div>
                                            <div className="content">
                                                <div className="header">{title}</div>
                                                <div className="meta price">$ {price}</div>
                                                <div className="ui input focus">
                                                    <button disabled={isDisabled} onClick={() => decrement(product)} className="ui icon button">
                                                        <i className="minus icon"></i>
                                                    </button>
                                                    <input className="quantity" type="text" readOnly value={product.quantity} />
                                                    <button onClick={() => increment(product)} className="ui icon button plus-icon">
                                                        <i className="plus icon"></i>
                                                    </button>
                                                </div>
                                                <div className="meta price">Total - $ {getTotalAmount(product).toFixed(2)}</div>
                                                <button className="ui red button" onClick={() => onDeleteProduct(product)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <br />
                            <div className="buttons-center">
                                <button className="green ui button visible" onClick={() => pageNavigation('/products')}>Continue Shooping</button>
                                <button className="green ui button visible" onClick={() => pageNavigation('/checkout')}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartDetail;