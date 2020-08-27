import React from 'react';

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

            
        </div>
    );
};

export default Cart;