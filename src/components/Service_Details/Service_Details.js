import React from 'react';

const Service_Details = ({service}) => {
    return (
        <div className="col-md-3 ml-5 shadow-sm  mr-2 mt-5 bg-white rounded">
            
            {
               service.image ? <img style={{height:'200px'}} src={`data:image/png;base64,${service.image.img}`} />
                :
                <img src={`https://murmuring-wave-78511.herokuapp.com/${service.img}`} style={{width:'200px'}} className="img-fluid" alt=""/>

            }
            <h2>{service.name}</h2>
            <small>{service.description}</small>
        </div>
    );
};

export default Service_Details;