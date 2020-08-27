import React from 'react';
import fakeData from '../fakedata';

const Online = () => {  
    const coures = fakeData;
    console.log(coures);
    return (
        <div>
        <h1>first try for test</h1>
         <ul>
            {
                coures.map( data => <li>{data.name}</li>)
            }
        
         </ul>
        </div>
    );
};

export default Online;