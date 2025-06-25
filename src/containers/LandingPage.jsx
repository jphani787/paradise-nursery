import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const productListNavigation = () => {
        navigate('/products');
    }

    return (
        <div className="ui middle aligned center aligned grid landing-page">
            <div className="two column computer only row">
                <div className="four wide column">
                    <h2>Welcome to Paradise Nursery</h2>
                    <p className="meets-serenity-text">Where Green Meets Serenity</p>
                    <button onClick={productListNavigation} className="green ui button visible">Get Started</button>
                </div>
                <div className="one wide column"></div>
                <div className="seven wide column">
                    <h3>Welcome to Paradise Nursery, where green meets serenity!</h3>
                    <p>At Paradise Nursery, we are passionate about bringing nature color to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundingd but also contribute to a healthier and more sustainable lifestyle. From airpurifying plants to aromatic fragrant ones, we have something for every plant enthusiast. <br /><br />
                        Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. whether you're a seasoned gardener or just starting your green journey, we are here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.<br /><br />
                        Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature in right at your doorstep.</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;