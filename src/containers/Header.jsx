import React from "react";
import logo from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const addedProducts = useSelector((state) => state.allProducts.add_product);
    const navigate = useNavigate();
    const getProductCount = () => {
        return addedProducts.reduce((sum, product) => sum + product.quantity, 0);
    }

    const pageNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className="ui three column grid page-header">
            <div className="four wide column padding-bottom-0">
                <div className="two wide column padding-bottom-0 logo-info" onClick={() => pageNavigation('/')}>
                    <div className='column logo-div'><img src={logo} alt='logo' className='logo' /></div>
                    <div className='column text-div'>
                        <h3>Paradise Nursery</h3>
                        <span>Where Green Meets Serenity</span>
                    </div>
                </div>
            </div>
            <div className="eight wide column plants-text padding-bottom-0">
                <h2>Plants</h2>
            </div>
            <div className="four wide column padding-bottom-0">
                <div className='shopping-cart'>
                    <div className='cart-info' onClick={() => pageNavigation('/cart')}>
                        <i className="shopping cart icon"></i>
                        <span>{getProductCount()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;