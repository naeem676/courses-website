import React from 'react';
import './Advetise.css';

const Advetise = (props) => {
    const{picture, price, name} = props.courses;
    
    return (
        <div className="advetise"> 
        <img src={picture} alt=""/>
        <h1>{name}</h1>
        <h3>${price}</h3>
        <button>add Courses</button>
        
            
        </div>
    );
};

export default Advetise;