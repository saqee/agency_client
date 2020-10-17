import React from 'react';
import slack from '../../images/logos/slack.png'
import airbnb from '../../images/logos/airbnb.png'
import google from '../../images/logos/google.png'
import netflix from '../../images/logos/netflix.png'
import uber from '../../images/logos/uber.png'
const PartnerLogo = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-1">

            </div>
            <div className="col-md-2">
             <img src={slack} style={{width:'200px', height:'50px'}} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-2">
            <img src={google} style={{width:'200px',height:'60px'}} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-2">
            <img src={uber} style={{width:'200px',  height:'60px'}} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-2">
            <img src={netflix} style={{width:'200px',height:'60px'}} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-2">
            <img src={airbnb} style={{width:'200px',height:'60px'}} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-2">

            </div>
           

        </div>
    );
};

export default PartnerLogo;