import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Online from './compunents/Online';
import Header from './compunents/header/Header';


function App () {
  return (
    <div className="App">
    <Header></Header>
    <Online></Online>
      
    </div>
  );
}

export default App;
