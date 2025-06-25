import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateItem } from "../redux/actions/productActions";

const CartDetail = () => {
    const dispatch = useDispatch();
    const [isMinusDisabled, setMinusDisabled] = useState([]);
    const items = useSelector((state) => state.allItems.add_item);
    const navigate = useNavigate();
    const pageNavigation = (path) => {
        navigate(path);
    }

    const updateMinusButton = () => {
        const itemIds = items.filter(item => item.quantity === 1).map(item => item.id);
        setMinusDisabled(itemIds);
    }

    useEffect(() => {
        updateMinusButton();
    }, []);

    const getCartTotalAmount = () => {
        return items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    }

    const getTotalAmount = (item) => {
        return (item.quantity * item.price);
    };

    const increment = (item) => {
        dispatch(addItem(item));
        if (item.quantity > 1) {
            const minusList = isMinusDisabled.filter(minus => minus !== item.id);
            setMinusDisabled(minusList);
        }
    }

    const decrement = (item) => {
        dispatch(updateItem(item));
        if (item.quantity === 1) {
            setMinusDisabled([item.id]);
        }
    }

    const onDeleteProduct = (item) => {
        dispatch(removeItem(item));
    }

    return (
        <div>
            <Header />
            <div className="ui grid products">
                <div className="row">
                    <div className="four cart-list wide">
                        <div className="cart-detail-page">
                            <h2>Total Cart Amount : <strong className="color-red">$ {getCartTotalAmount().toFixed(2)}</strong> </h2>
                            {items.map(item => {
                                const { id, title, price, image } = item;
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
                                                    <button disabled={isDisabled} onClick={() => decrement(item)} className="ui icon button">
                                                        <i className="minus icon"></i>
                                                    </button>
                                                    <input className="quantity" type="text" readOnly value={item.quantity} />
                                                    <button onClick={() => increment(item)} className="ui icon button plus-icon">
                                                        <i className="plus icon"></i>
                                                    </button>
                                                </div>
                                                <div className="meta price">Total - $ {getTotalAmount(item).toFixed(2)}</div>
                                                <button className="ui red button" onClick={() => onDeleteProduct(item)}>Delete</button>
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