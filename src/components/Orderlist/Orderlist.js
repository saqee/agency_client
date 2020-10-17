import React from 'react';

const Orderlist = ({order}) => {
    return (
        <div className="col-md-3 ml-5 shadow-sm  mr-2 mt-2 bg-white rounded">
            {
               order.image ? <img style={{height:'200px'}} src={`data:image/png;base64,${order.image.img}`} />
                :
                <img src={`https://murmuring-wave-78511.herokuapp.com/${order.img}`} style={{width:'200px'}} className="img-fluid" alt=""/>

            }
                        <h2>{order.name}</h2>
            <small>{order.description}</small>
        </div>
    );
};

export default Orderlist;