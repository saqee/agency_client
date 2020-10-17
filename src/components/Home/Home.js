import React from 'react';
import Clients from '../Clients/Clients';
import CompanyWork from '../CompanyWork/CompanyWork';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import PartnerLogo from '../PartnerLogo/PartnerLogo';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <PartnerLogo></PartnerLogo>
            <Service></Service>
            <CompanyWork> </CompanyWork>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;