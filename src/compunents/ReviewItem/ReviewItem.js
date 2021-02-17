import React from 'react';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';


const ReviewItem = (props) => {
    const course = props.course;
    const {key} = course;
    return (
       
            <div className="advetise">
                   <div className="photography">
                     <img src={course.picture} alt="" srcset=""/>
                    </div>
                    <div className="discription">
                    <h3>{course.quantity}</h3>
                     <h1>{course.name}</h1><br/>
                   <h3>${course.price}</h3><br/>
                  <Button variant="primary" onClick={() => props.removeCourse(key)} >   
                 <FontAwesomeIcon icon={ faMinusCircle} /> Remove</Button>{' '}

                   </div>
                   </div> 
       
    );
};

export default ReviewItem;