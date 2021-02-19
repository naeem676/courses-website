import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { creactSignInWithEmailAndPassword, handleSignIn, handleSignOut, initializeHandel, signWithEmailAndPassword } from './DatabaseManager';

initializeHandel();

const LogIn = () => {

  const [logInUser, setLogInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn:false,
    name:'',
    email:'',
    photo:''
  })

  const googleHandleSignIn = () => {
    handleSignIn()
    .then(res => {
     handleRespond(res, true)
    })
  }

  const googleHandleSignOut = () => {
    handleSignOut()
    .then(res => {
      handleRespond(res, false)
    })
  }

  const fbSignIn = () => {

  }

  const handleRespond = (res, Redirect) => {
    setUser(res);
    setLogInUser(res);
    if(Redirect){
      history.replace(from);
    }
  }

  
  const handleOnSubmit = (e) => {
    
    if(newUser && user.email && user.password){
        creactSignInWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
           handleRespond(res, true)
        })
    }
   
    if(!newUser && user.email && user.password){
      signWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleRespond(res, true)
      })
    }
    e.preventDefault();

  }

 
  

 
  
  const handleOnChange = (e) => {
    let isFieldValid;

    if(e.target.name === 'email'){
      isFieldValid =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e.target.value)
      

    }
    if(e.target.name === 'password'){
       isFieldValid = /^(?=.*\d)[a-zA-Z0-9]{7,}$/.test(e.target.value)
     
    }
    if(e.target.name === 'name'){
      isFieldValid = e.target.value

    }
    if(isFieldValid){
      const newUserInfo = {...user}
      newUserInfo[e.target.name]= e.target.value;
      setUser(newUserInfo);
    }

  }

  
 



  return (
    <div style={{textAlign: 'center'}} >
        {
      user.isSignIn ? <button onClick={googleHandleSignOut}>sign out</button> :
      <button onClick={googleHandleSignIn}>sign in</button>
    }
    <br/>
    <button onClick={fbSignIn}>Use Facebook Id</button>
    
    <h1>Our own authentication</h1>
    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
    <label htmlFor="newUser">New User Sign In</label>
    <form onSubmit={handleOnSubmit}>
    { newUser && <input name="name" type="text" onBlur={handleOnChange} placeholder="Your name" />}
    <br/>
    <input type="text" name="email" onBlur={handleOnChange} placeholder='Your email address' required/>
    <br/>
    <input type="password" name="password" onBlur={handleOnChange} placeholder='Your password'  required/>
    <br/>
    <input type="submit" value={ newUser ? 'sign up' : 'sign in'}/>
    </form>
    <p style={{color:"red"}}>{user.error}</p>
    {user.success && <p style={{color:"green"}}>User {newUser ? "create" : "log in"} successfully</p>}
    

            
    </div>
  );
};

export default LogIn;