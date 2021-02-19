import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const   Header = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
        <div className="header">
        
            <nav>
                    <Link to="/University">University</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/manage">Manage inventory</Link>
                    <Button onClick={()=> setLogInUser({})}>Log out</Button>
            </nav>
            
        </div>
    );
};

export default  Header;