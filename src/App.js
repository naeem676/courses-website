import React from 'react';
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






function App () {
  return (
    <div className="App">
    
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
        <Route path='/shipment'>
        <Shipment></Shipment>
       </Route>
       <Route path='/login'>
        <LogIn></LogIn>
       </Route>
       <Route path='/databaseManager'>
       
       </Route>

        <Route path='/manage'>
        <Inventory></Inventory>
        </Route>
        <Route path='/course/:courseKey'>
        <CourseDetails></CourseDetails>
    

        </Route>
       

        <Route path='*'>
        <NoMatch></NoMatch>
 
        </Route>
      </Switch>
    </Router>
    
      
    </div>
  );
}

export default App;
