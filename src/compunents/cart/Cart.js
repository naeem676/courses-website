import React from 'react';
import Button from 'react-bootstrap/Button';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, crs) => total + crs.price, 0);
    const tax = Math.round(total / 25 ); 
    return (
        <div>
         <h3>Order summary</h3>
         <h4>Courses Ordered: {cart.length}</h4>
         <h5>Tax : ${tax}</h5>
         <h4>total price: ${total + tax}</h4>
         <Button variant="outline-primary">review your Order</Button>

            
        </div>
    );
};

export default Cart;