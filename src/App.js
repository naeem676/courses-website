import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compunents/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './compunents/noMatch/NoMatch';
import Online from './compunents/online/Online';
import Review from './compunents/online/review/Review';
import Inventory from './compunents/inventory/Inventory';
import LogIn from './compunents/login/LogIn';
import CourseDetails from './compunents/courseDetails/CourseDetails';
import Shipment from './compunents/Shipment/Shipment';
import PrivateRoute from './compunents/PrivateRoute/PrivateRoute';



export const UserContext = createContext();


function App () {
  const [logInUser, setLogInUser] = useState({});
  return (
    <UserContext.Provider value={[logInUser, setLogInUser]} className="App">

    <h2>Email:{logInUser.email}</h2>
    

    
    <Router>
    <Header></Header>
    
      <Switch>
        <Route exact path='/'>
          
          <Online></Online>

        </Route>
    
        <Route path='/University'>
        
        <Online></Online>

        </Route>

        <Route path='/review'>
        
         <Review></Review>

        </Route>

        <PrivateRoute path='/shipment'>
        <Shipment></Shipment>
       </PrivateRoute>
       
       <Route path='/login'>
        <LogIn></LogIn>
       </Route>
       <Route path='/databaseManager'>
       
       </Route>

        <PrivateRoute path='/manage'>
        <Inventory></Inventory>
        </PrivateRoute>
        <Route path='/course/:courseKey'>
        <CourseDetails></CourseDetails>
    

        </Route>
       

        <Route path='*'>
        <NoMatch></NoMatch>
 
        </Route>
      </Switch>
    </Router>
    
      
    </UserContext.Provider>
  );
}

export default App;
