import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;