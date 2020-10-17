import React, { useEffect, useState } from 'react';
import client1 from '../../images/customer-1.png'
import client2 from '../../images/customer-2.png'
import client3 from '../../images/customer-3.png'
import Clients_details from '../Clients_details/Clients_details';


const Clients = () => {
  const [client,setclient]=useState([])
  useEffect(()=>{

    fetch('https://murmuring-wave-78511.herokuapp.com/readcompany')
    .then(res=>res.json())
    .then(data=>setclient(data))
  },[])

    return (
        <section className="d-flex justify-content-center mt-4 p-5 ml-5">
                
              
              <div className="row mt-4">
              <div className="col-md-12 mb-3">
                <h2>Clients <span style={{color:'green',textAlign:'center'}}>FeedBack</span></h2>
            
                </div>
            {client.map(client=> <Clients_details client={client}></Clients_details>)}
        </div>
       </section>
    );
};

export default Clients;