import React from 'react';
import "./main.css"

import { useTranslation } from 'react-i18next';


function Main() {
    const { t } = useTranslation();

    return (
        <div className="main-class" id="main">
            <h1>{t("main.text")}</h1>
        </div>
    );

}

export default Main;
