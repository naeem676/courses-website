import React from 'react';
import fakeData from '../fakedata';
import Advetise from './Advetise/Advetise';

const Online = () => {  
    const coures = fakeData;
    return (
        <div>
         <ul>
            {
                coures.map( data => <Advetise courses={data}></Advetise>)
            }
        
         </ul>
        </div>
    );
};

export default Online;