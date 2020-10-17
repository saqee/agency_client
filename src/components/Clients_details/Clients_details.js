import React from 'react';

const Clients_details = ({client}) => {
    return (
        <div className="col-md-3 ml-5 shadow-sm  mr-2 mt-5 bg-white rounded">
              {
               client.image ? <img style={{height:'200px'}} src={`data:image/png;base64,${client.image.img}`} />
                :
                <img src={`https://murmuring-wave-78511.herokuapp.com/${client.img}`} style={{width:'200px'}} className="img-fluid" alt=""/>

            }
            <h2>{client.name}</h2>
            <p>{client.position}</p>
            <small>{client.description}</small>
        </div>
    );
};

export default Clients_details;