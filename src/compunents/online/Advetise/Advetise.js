import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Advetise.css';
import { Link } from 'react-router-dom';



const Advetise = (props) => {
    const courses = props.courses;
     
    const handleCourse = props.handleCourse;

    const {picture, price, name, key} = courses;
    
    
    return (
        

        <div className="advetise">
        <div className="photography">
        <img src={picture} alt=""/>
        </div>
        <div className="discription">
       <Link to={`/course/${key}`}> <h1>{name}</h1></Link><br/>
        <h3>${price}</h3><br/>
        { props.showButton && <Button variant="primary"  onClick={() => handleCourse(courses)}>  
        <FontAwesomeIcon icon={faPlus} />  Enroll Now</Button>}
   

        </div>
        </div>
        
        
        
    );
};

export default Advetise;