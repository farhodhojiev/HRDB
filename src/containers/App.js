import React from 'react';
import "./App.css"

import Lang from '../components/language/language';
import Main from '../components/main/main';
import ImageSlide from '../components/imageslide/imageslide'
import Info from '../components/info/info'
import Plan from '../components/plan/plan'
import Download from '../components/download/download'
// import OurClients from '../components/ourclients/ourclients'
import Footer from '../components/footer/footer'
import Cookie from '../components/cookie/cookie'

import { useTranslation } from 'react-i18next';

import logoImg from '../assets/LogoFullSmall.png'




function App() {
    const { t } = useTranslation();
    const emptyDiv={height: '100px'}
    const logoImgStyle={height: '80px', paddingTop: '10px'}

    function goTo(link){
        document.getElementById(link).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return (
        <div>
            <div>
                <div className="header">

                    {/* background effect */}
                    <div className="bg-effect"></div>
                    <div className="bg-effect bg2-effect"></div>
                    <div className="bg-effect bg3-effect"></div>

                    <h2 className="logo"><img src={logoImg} alt="HRDB" style={logoImgStyle}/></h2>
                    <input type="checkbox" id="chk"></input>
                    <label htmlFor="chk" className="show-menu-btn">
                        <i>&#8226;&#8226;&#8226;</i>
                    </label>
                    <ul className="menu">
                        <span onClick={()=>goTo('main')}>{t('navbar.home')}</span>
                        <span onClick={()=>goTo('info')}>{t('navbar.info')}</span>
                        <span onClick={()=>goTo('plan')}>{t('navbar.price')}</span>
                        <span onClick={()=>goTo('application')}>{t('navbar.app')}</span>
                        <a href="http://serv.humresdb.com" className="enter-register"><span>{t('navbar.signupin')}</span></a>
                        <label htmlFor="chk" className="hide-menu-btn">
                            &#10006;
                        </label>
                    </ul>
                </div>
                <div style={emptyDiv}></div>
                <Lang />
                <Main />
                <Cookie />
                <ImageSlide />
                <Info />
                <Plan />
                <Download />
                {/* <OurClients /> */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
