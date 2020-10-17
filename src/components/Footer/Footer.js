import React from 'react';

const Footer = () => {
  const footerStyle={
      backgroundColor:'#FBD062',
      height:'400px'
  }
    
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center" style={footerStyle}>
            <div className="col-md-4 offset-md-1">
             <h1 style={{color:'#111430',fontWeight:'bold'}}>Lets Us Handle Your</h1>
             <h1 style={{color:'#111430',fontWeight:'bold'}}>Project Professtionaly</h1>
             
             <p style={{color:'#000000'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quasi ipsa sit numquam odio. Consectetur, eius odio unde voluptate blanditiis ipsum doloremque nulla cumque? Magnam incidunt iusto quam praesentium aspernatur.</p>
            
            </div>
            <div className="col-md-7">
            <form>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Company Name"/>
  </div>
  
  <div class="form-group">
    
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
   </form>
            </div>
            <div className="d-flex justify-content-center ">
            <p   style={{ color:'black' , marginLeft:'850px', marginTop:'50px'}} >&copy;Saqeeb Lab.2020</p>
      
            </div>
            </main>
    );
};

export default Footer;