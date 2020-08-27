import React from 'react';
import fakeData from '../fakedata';
import Advetise from './Advetise/Advetise';
import './Online.css';

const Online = () => {  
    const coures = fakeData;
    return (
        <div className="online">
        <div className="coures-container">
        <ul>
            {
                coures.map( data => <Advetise courses={data} key={data.email}></Advetise>)
            }
        
         </ul>

        </div>
        <div className="cart-container">
            <h3>Order summary:</h3>
        </div>
        
        
        </div>
    );
};

export default Online;