import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Advetise.css';

const Advetise = (props) => {

    const{picture, price, name} = props.courses;
    
    return (
        <div className="advetise"> 
        <div className="photography">
        <img src={picture} alt=""/>

        </div>
        <div className="discription">
        <h1>{name}</h1><br/>
        <h3>${price}</h3><br/>
        <button onClick={() => props.handleCourse(props.courses)}>  
        <FontAwesomeIcon icon={faPlus} />  add Courses</button>

        </div>
        
        </div>
    );
};

export default Advetise;