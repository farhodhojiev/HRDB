import React from 'react';
import "./ourclients.css"

import { useTranslation } from 'react-i18next';

import imgotj from './imgotj.png'


function OurClients() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="our-clients">
                <div className="our-clients-title">{t('ourclients.title')}</div>
                <div className="our-clients-img">
                    <a href="http://oxus.tj" rel="noopener noreferrer" target="_blank" title="OXUS Tajikistan">
                        <img src={imgotj} alt="OXUS Tajikistan" />
                    </a>
                </div>
            </div>
        </div>
    );

}

export default OurClients;
