import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        shipping += product.shipping*product.quantity
        quantity += product.quantity
    }

    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;


    return (
        <div className='cart-box'>
            <h2>Order Summary</h2>
            <div>
                <p>Select Items : {quantity}</p>
                <p>Total Price : ${totalPrice}</p>
                <p>Total Shipping Charge : ${shipping}</p>
                <p>Tax : $ {tax.toFixed(2)}</p>
                <h3 className='grand-total'>Grand Total : ${grandTotal.toFixed(2)}</h3>
            </div>
            <div className='btn-box'>
                <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan}/></button> <br />
                <button className='review-btn'>Review Order <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
        </div>
    );
};

export default Cart;