import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const   Header = () => {
    const classes = useStyles();
    const [logInUser, setLogInUser] = useContext(UserContext);
    console.log(logInUser);
    return (
        <div className="header">
             
        
        
            
             <nav>
                    <div className={classes.root}>

                     <Avatar alt="Remy Sharp" src={logInUser.photo} />
  
      
           
                     <Link to="/University">University</Link>
                     <Link to="/review">Order Review</Link>
                     <Link to="/manage">Manage inventory</Link>
                     <Button onClick={()=> setLogInUser({})}>Log out</Button>

       
   

                    </div> 
             </nav>
                    
            
            
        </div>
    );
};

export default  Header;