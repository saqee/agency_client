import React, { useEffect, useState } from 'react';
import service1 from '../../images/icons/service1.png'
import service2 from '../../images/icons/service2.png'
import service3 from '../../images/icons/service3.png'
import Service_Details from '../Service_Details/Service_Details';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";


const Service = () => {
   const [service,setService]=useState([])

   useEffect(()=>{
      fetch('https://murmuring-wave-78511.herokuapp.com/read1')
      .then(res=>res.json())
      .then(data => setService(data))
   },[])
    return (
       <section className="d-flex justify-content-center mt-4 p-5 ml-5">
               <Link to="/order"> 
              
              <div className="row mt-4">
              <div className="col-md-12 mb-3">
                <h2>Provide Awesome <span style={{color:'green',textAlign:'center'}}>Services</span></h2>
            
                </div>
            {service.map(service=> <Service_Details service={service}></Service_Details>)}
        </div>
        </Link>
       </section>
    );
};

export default Service;