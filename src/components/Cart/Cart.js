import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    console.log(cart);

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = Number((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>

            <div className="cart-info">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p className='total'>Grand Total: ${grandTotal}</p>
            </div>

            <div className="action-button">
                <button className='clear'>Clear Cart</button>
                <button className='review'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;