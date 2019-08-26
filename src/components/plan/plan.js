import React from 'react';
import "./plan.css"

import { useTranslation } from 'react-i18next';


function Plan() {
    const { t } = useTranslation();

    return (
        <div className="plan-class" id="plan">
            <div className="plan-title">{t('plan.title')}</div>
            <div className="plan-box plan-green">
                <div className="plan-box-content">
                    <div className="plan-box-title">
                        {t('plan.p1.title')}
                    </div>
                    $<b>0</b> / {t('plan.month')}<br /><br />
                    <li>{t('plan.p1.text')}</li>
                </div>
            </div>
            <div className="plan-box plan-blue">
                <div className="plan-box-content">
                    <div className="plan-box-title">
                        {t('plan.p2.title')}
                    </div>
                    $<b>5</b> / {t('plan.month')}<br /><br />
                    <li>{t('plan.p2.text')}</li>
                    <li>{t('plan.p2.text2')}</li>
                </div>
            </div>
            <div className="plan-box plan-red">
                <div className="plan-box-content">
                    <div className="plan-box-title">
                        {t('plan.p3.title')}
                    </div>
                    $<b>50</b> / {t('plan.month')}<br /><br />
                    <li>{t('plan.p3.text')}</li>
                    <li>{t('plan.p3.text2')}</li>
                    <li>{t('plan.p3.text3')}</li>
                </div>
            </div>
            <div className="plan-box plan-gold">
                <div className="plan-box-content">
                    <div className="plan-box-title">
                        {t('plan.p4.title')}
                    </div>
                    {t('plan.p4.contract')}<br /><br /><br /><br />
                    <a href="mailto: info@humresdb.com" className="plan-rem-tex-dec"><div className="plan-contact">{t('plan.p4.contactUs')}</div></a>
                </div>
            </div>
        </div>
    );

}

export default Plan;
