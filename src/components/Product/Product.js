import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, img, seller, price, ratings, category, stock } = props.product;

    
    return (
        <div className='product'>
            <div className="product-detail">
                <img src={img} alt="" />
                <div className="info">
                    <p className='product-name'>{name}</p>
                    <p className='price'><span>Price</span>: {price}$</p>
                    <p className='category'><span>{category}</span></p>
                    <p className='stock'><span>In Stock</span>: {stock}pcs</p>

                    <div className="bottom-info">
                        <p className='seller'><small>Seller: {seller}</small></p>
                        <p className='ratings'><small>Ratings: {ratings}</small></p>
                    </div>
 
                </div>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='cart-button'>
                <p>Add to Cart</p>
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    );
};

export default Product;