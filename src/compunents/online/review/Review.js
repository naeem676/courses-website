
import React, {  useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../../utilized/Databaz';
import fakeData from '../../../fakedata';
import '../Online.css';
import ReviewItem from '../../ReviewItem/ReviewItem';
import Cart from '../cart/Cart';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




const Review = () => {
  const [cart, setCart] = useState([]);

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
      <Link to="shipment"> <Button variant="primary">place holder</Button></Link>
      </Cart>
       
      </div>
     


      </div>





        
    );
};

export default Review;




 