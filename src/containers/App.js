import React from 'react';
import "./App.css"
import Lang from '../components/language/language';
import Home from '../components/home/home';
import Doc from '../components/doc/doc'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { useTranslation } from 'react-i18next';

import logoImg from '../assets/LogoFullSmall.png'




function App() {
    const { t } = useTranslation();
    const emptyDiv={height: '100px'}
    const logoImgStyle={height: '80px', paddingTop: '10px'}
    return (
        <div>
            <Router>
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
                        <Link to="/">{t('navbar.home')}</Link>
                        <Link to="/doc">{t('navbar.doc')}</Link>
                        <a href="http://serv.humresdb.com/login">{t('navbar.signin')}</a>
                        <a href="http://serv.humresdb.com/register">{t('navbar.regCompany')}</a>
                        <label htmlFor="chk" className="hide-menu-btn">
                            &#10006;
                        </label>
                        </ul>
                    </div>
                    <div style={emptyDiv}></div>
                    <Lang />
                    <Route exact path="/" component={Home} />
                    <Route path="/doc" component={Doc} />
                </div>
            </Router>
        </div>
    );
}

export default App;
