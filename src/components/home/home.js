import React from 'react';
import "./home.css"

import { useTranslation } from 'react-i18next';

import ImageSlide from './imageslide/imageslide'
import OurClients from './ourclients/ourclients'
import Footer from './footer/footer'

function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <ImageSlide />
            {t('test2')}
            <OurClients />
            <Footer />
        </div>
    );

}

export default Home;
