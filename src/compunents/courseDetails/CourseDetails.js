import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css'
import fakeData from '../../fakedata';
import Advetise from '../online/Advetise/Advetise';


const CourseDetails = () => {

    const {courseKey} = useParams();
    console.log(courseKey);
    const course = fakeData;
    console.log(course);
    const courseDetail = course.find( crs => crs.key === courseKey )
    console.log(courseDetail);
    // const {picture, name, price, key} = courseDetail;
    return (


        <div>
            <Advetise courses={courseDetail} showButton={false}></Advetise>
        </div>
        // <div className="advetise">
        //            <div className="photography">
        //              <img src={picture} alt="" srcset=""/>
        //             </div>
        //             <div className="discription">
        //              <h1>{name}</h1><br/>
        //            <h3>${price}</h3><br/>

        //            </div>
        //            </div> 
    );
};

export default CourseDetails;