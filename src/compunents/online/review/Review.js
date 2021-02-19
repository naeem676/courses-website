
import React, {  useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../../utilized/Databaz';
import fakeData from '../../../fakedata';
import '../Online.css';
import ReviewItem from '../../ReviewItem/ReviewItem';
import Cart from '../cart/Cart';
import Button from 'react-bootstrap/Button';
import {useHistory } from 'react-router-dom';





const Review = () => {
  const [cart, setCart] = useState([]);
  const [placeHolder, setPlaceHolder] = useState(false)

  const history = useHistory();

  const handlProcesChake = () => {
    history.push('/shipment')
    
  }

  const removeCourse = (courseKey) => {
    const newCart = cart.filter(cos => cos.key !== courseKey)
    setCart(newCart);
    removeFromDatabaseCart(courseKey);
    
  }

 
   
  useEffect(() => {
     const savedCart = getDatabaseCart();
     const courseKeys = Object.keys(savedCart);
     const courseCart = courseKeys.map( key => {
       const course = fakeData.find( crs => crs.key === key);
       course.quantity = savedCart[key];
       
       return course ;
     });
      setCart(courseCart);
       
     
         }, []);

       
         
          

    return (

      <div className="online">
      
      <div className="coures-container">
      {
        cart.map( cos =>
         
          <ReviewItem course={cos} key={cos.key} removeCourse={removeCourse}></ReviewItem>
                   
         )
      }
      

      </div>
      <div className="cart-container">
      <Cart cart={cart}>
      <Button onClick={handlProcesChake} variant="primary">Process checkout</Button>
      </Cart>
       
      </div>
      
     


      </div>





        
    );
};

export default Review;




 