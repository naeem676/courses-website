import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

  
    return (
     
      <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      
        <input className='ship-input' defaultValue={logInUser.name} name="name" ref={register({ required: true })} placeholder='Your name' />
        {errors.name && <span className='error'>Your name is required</span>}

        <input className='ship-input' defaultValue={logInUser.email} name="Email" ref={register({ required: true })} placeholder='Your Email' />
        {errors.email && <span className='error'>Your email is required</span>}

        <input className='ship-input' name="address" ref={register({ required: true })} placeholder='Your address' />
        {errors.address && <span className='error'>Your address is required</span>}

        <input className='ship-input' name="phone" ref={register({ required: true })} placeholder='Phone number' />
        {errors.phone && <span className='error'>Your phone number is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;