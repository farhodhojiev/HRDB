import React from 'react';
import "./footer.css"

import { useTranslation } from 'react-i18next';

import logo from './logo.png'


function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer-class">
            <div className="footer-hrdb">
                <img src={logo} alt="logo" className="footer-logo"/>
                &nbsp;{t('footer.hrdb')}
            </div>
            <br />
            <div className="copyright">{t('footer.text')}</div>
        </div>
    );

}

export default Footer;
