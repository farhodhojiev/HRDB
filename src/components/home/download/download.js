import React from 'react';
import "./download.css"

import { useTranslation } from 'react-i18next';

import logoImg from '../../../assets/LogoFullSmall.png'
import Apple from './apple.png'
import Google from './google.png'


function Download() {
    const { t } = useTranslation();

    return (
        <div className="download-class">
            <div className="download-title">{t('download.title')}</div>
            <div className="download-text">
                <div className="download-web">{t('download.web')}</div>
                <a href="http://serv.humresdb.com" target="_blank" rel="noopener noreferrer">
                    <img src={logoImg} alt="logo" />
                </a>
                <div className="download-web">{t('download.coming')}</div>
                <img src={Google} alt="logo" height="60px" width="200px" />&nbsp;
                <img src={Apple} alt="logo" height="60px" width="200px" />&nbsp;
            </div>
        </div>
    );

}

export default Download;
