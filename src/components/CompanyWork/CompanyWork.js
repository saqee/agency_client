import React from 'react';
import img1 from '../../images/carousel-1.png'
import img2 from '../../images/carousel-2.png'
import img3 from '../../images/carousel-3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CompanyWork = () => {
    return (
        <div style={{marginLeft:'200px'}}>
            <Carousel className="w-75 ml-5 pl-5">
               
                <div >
                    <img src={img1} className="img-fluid mt-3" />
                    <h1> <span style={{color:'white'}}>Here are Some Beautiful</span> <span style={{color:'green'}}>Works</span></h1>
                </div>
                <div>
                <img src={img2} className="pt-3  img-fluid" />
                <h1> <span style={{color:'white'}}> Here are Some Beautiful</span> <span style={{color:'green'}}>Works</span></h1>
                </div>
                <div>
                    <img src={img3} className="img-fluid mt-3" />
                    <h1> <span style={{color:'white'}}>Here are Some Beautiful</span> <span style={{color:'green'}}>Works</span></h1>
                </div>
            </Carousel>
        </div>
    );
};

export default CompanyWork;