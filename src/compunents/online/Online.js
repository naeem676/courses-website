import React, { useEffect, useState } from 'react';
import fakeData from '../../fakedata';
import { addToDatabaseCart, getDatabaseCart } from '../../utilized/Databaz';
import Advetise from './Advetise/Advetise';
import Cart from './cart/Cart';
import './Online.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




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
            newCart = [...other, sameCourses ];
        }
        else{
            course.quantity = 1;
            newCart = [...cart, course]
        }
        
        setCart(newCart);
    
        addToDatabaseCart(course.key, count);
        
    }

    const classes = useStyles();

    
   
        
    return (
        <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
              <ul>
                {
                      coures.map( data => <Advetise showButton={true} handleCourse={handleCourse} courses={data} key={data.key}></Advetise>)
                }
        
         </ul>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Cart  cart={cart}>
                  <Link to="/review"> <Button variant="primary"> review order</Button></Link>
                </Cart>
               
          </Paper>
        </Grid>
        </Grid>
        </div>




        
        //     <div  className="online">
        // <div className="coures-container">
        // <ul>
        //     {
        //         coures.map( data => <Advetise showButton={true} handleCourse={handleCourse} courses={data} key={data.key}></Advetise>)
        //     }
        
        //  </ul>

        // </div>
        //         <div className="cart-container">
        //          <Cart  cart={cart}>
        //          <Link to="/review"> <Button variant="primary"> review order</Button></Link>
        //          </Cart>
        //          </div>
         
        
        // </div>
        
    );
};

export default Online;