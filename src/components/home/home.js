import React from 'react';
import "./home.css"

import { useTranslation } from 'react-i18next';

import ImageSlide from './imageslide/imageslide'

function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <ImageSlide />
            {t('test2')}
        </div>
    );

}

export default Home;
