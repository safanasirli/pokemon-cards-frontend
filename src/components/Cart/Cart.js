import React from 'react';
import './Cart.css';
import Paypal from '../Paypal/Paypal';

function Cart() {
    return (
        <div>
            <h1>Cart</h1>
            {/* Paypal button */}
            <Paypal />
        </div>
    );
}

export default Cart;