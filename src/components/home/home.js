import React from 'react';
import "./home.css"

import { useTranslation } from 'react-i18next';


function Home() {
    const { t } = useTranslation();
    return (
        <div>
            {t('test2')}
        </div>
    );

}

export default Home;
