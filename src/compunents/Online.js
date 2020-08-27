import React, { useState } from 'react';
import fakeData from '../fakedata';
import Advetise from './Advetise/Advetise';
import './Online.css';
import Cart from './cart/Cart';

const Online = () => {
    const [cart, setCart] = useState([]) 
    const coures = fakeData;
    const handleCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
        
    }
    return (
        <div className="online">
        <div className="coures-container">
        <ul>
            {
                coures.map( data => <Advetise handleCourse={handleCourse} courses={data} key={data.price}></Advetise>)
            }
        
         </ul>

        </div>
        <div className="cart-container">
           <Cart cart={cart}></Cart>
        </div>
        
        
        </div>
    );
};

export default Online;