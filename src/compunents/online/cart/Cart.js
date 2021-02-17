import React from 'react';
import Card from 'react-bootstrap/Card'
import './cart.css';


const Cart = (props) => {
   console.log(props);
    const cart = props.cart;
    
    const total = cart.reduce((total, crs) => total + crs.price * crs.quantity, 0);
    const tax = Math.round(total / 25 )
    const grandTotal = total + tax ; 

    return (


      
        <div className='cart'>
         <Card>
           <Card.Header>Order summary</Card.Header>
             <Card.Body>
               <Card.Title></Card.Title>
                  <Card.Text>
                           <p>Total price: ${total}</p>
                           <p>tax: ${tax}</p>
                           <p>Grand Total: ${grandTotal}</p>
      
                  </Card.Text>
                  {props.children}
                
             </Card.Body>
          </Card>
       </div>




      
      
    );
};

export default Cart;