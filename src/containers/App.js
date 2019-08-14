import React from 'react';
import Lang from '../components/language/language';
import Home from '../components/home/home';
import Doc from '../components/doc/doc'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { useTranslation } from 'react-i18next';



function App() {
    const { t } = useTranslation();
    return (
        <div>
            <Router>
                <div>
                <ul>
                    <li>
                        <Link to="/">{t('navbar.home')}</Link>
                    </li>
                    <li>
                        <Link to="/doc">{t('navbar.doc')}</Link>
                    </li>
                </ul>
                    <hr />
                    <Lang />
                    <Route exact path="/" component={Home} />
                    <Route path="/doc" component={Doc} />
                </div>
            </Router>
        </div>
    );
}

export default App;
