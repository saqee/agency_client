import React from 'react';
import frame from '../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
       <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
             <h1 style={{color:'#111430',fontWeight:'bold'}}>Lets Grow Your</h1>
             <h1 style={{color:'#111430',fontWeight:'bold'}}>Brand To The</h1>
             <h1 style={{color:'#111430',fontWeight:'bold'}}>Next Level</h1>
             <p style={{color:'#000000'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quasi ipsa sit numquam odio. Consectetur, eius odio unde voluptate blanditiis ipsum doloremque nulla cumque? Magnam incidunt iusto quam praesentium aspernatur.</p>
             <button style={{backgroundImage:"linear-gradient(#111430, #111430)", width:'120px', color:'white'}}>Hire Us</button> 
     
            </div>
            <div className="col-md-6">
                <img src={frame} className="img-fluid" alt=""/>
            </div>
       </main>
    );
};

export default HeaderMain;