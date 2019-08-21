import React from 'react';
import "./info.css"

import { useTranslation } from 'react-i18next';

import img from './img.png'

function Info() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="info-class" id="info">
                <div className="info-title">{t('info.title')}</div>
                <div className="info-text-content">
                    <div className="info-text">
                        {t('info.text')}<br /><br />
                        {t('info.text2')}
                    </div>
                </div>
                <div className="info-img-content">
                    <img src={img} alt="img" max-width="400px" className="info-img" />
                </div>
            </div>
        </div>
    );

}

export default Info;
