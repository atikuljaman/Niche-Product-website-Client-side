import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BannerCenter from '../BannerCenter/BannerCenter';
import BestSeller from '../BestSeller/BestSeller';
import Brands from '../Brands/Brands';
import Feature from '../Feature/Feature';
import NewsLetter from '../NewsLetter/NewsLetter';
import Offer from '../Offer/Offer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Feature />
            <BestSeller />
            <BannerCenter />
            <Testimonial />
            <Offer />
            <NewsLetter />
            <Brands />
            <Footer />
        </div>
    );
};

export default Home;