import React, { useEffect, useState } from 'react';
import fakeData from '../../fakedata';
import courses from '../../fakedata/Courses';
import { addToDatabaseCart, getDatabaseCart } from '../../utilized/Databaz';
import Advetise from './Advetise/Advetise';
import Cart from './cart/Cart';
import './Online.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';




const Online = () => {
    const [cart, setCart] = useState([]) 
    const coures = fakeData;

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const courseKeys = Object.keys(saveCart);
        const previousCart = courseKeys.map( exitingKey => {
            const course = fakeData.find( cos => cos.key === exitingKey);
            course.quantity = saveCart[exitingKey];
            return course;
        })
        setCart(previousCart);
    }, []);


    const handleCourse = (course) => {
        const toBeAddedKey = course.key;
        const sameCourses = cart.find(crs => crs.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameCourses){
            count = sameCourses.quantity + 1;
            sameCourses.quantity = count;
            const other = cart.filter(cos => cos.key !== toBeAddedKey);
            newCart = [...other, sameCourses];
        }
        else{
            course.quantity = 1;
            newCart = [...cart, course]
        }
        
        setCart(newCart);
        
        addToDatabaseCart(course.key, count);
        
    }

    
   
        
    return (
        
            <div  className="online">
        <div className="coures-container">
        <ul>
            {
                coures.map( data => <Advetise showButton={true} handleCourse={handleCourse} courses={data} key={data.key}></Advetise>)
            }
        
         </ul>

        </div>
                <div className="cart-container">
                 <Cart  cart={cart}>
                 <Link to="/review"> <Button variant="primary"> review order</Button></Link>
                 </Cart>
                 </div>
         
        
        </div>
        
    );
};

export default Online;