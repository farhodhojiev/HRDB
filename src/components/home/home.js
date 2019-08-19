import React from 'react';
import "./home.css"

import { useTranslation } from 'react-i18next';

import ImageSlide from './imageslide/imageslide'
import Plan from './plan/plan'
import Donwload from './download/download'
import OurClients from './ourclients/ourclients'
import Footer from './footer/footer'

function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <ImageSlide />
            <Plan />
            <Donwload />
            <OurClients />
            <Footer />
            {t('test2')}
        </div>
    );

}

export default Home;
