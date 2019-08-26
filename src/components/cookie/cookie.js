import React, {useEffect} from 'react';
import "./cookie.css"

import Button from '@material-ui/core/Button';

// import { useTranslation } from 'react-i18next';


function Cookie() {

    const setCookieFn = () => {
        localStorage.setItem('cookie', 1);
        cook.current.style.display='none'
    }

    let cook;
    cook=React.createRef();

    useEffect(() => {
        if(localStorage.getItem('cookie')){
            cook.current.style.display='none';
        }
    }, [cook]);

    return (
        <div>
            <div className="cookieDialog" ref={cook}>
                <div className="cookieText">
                This site uses cookies to give you the best possible experience. By continuing to use the site you agree that we can save cookies on your device. Cookies are some settings information placed on your device that remember your preferences and some details of your visit. Our cookies don’t collect personal information.
                    {/* <a href="https://html-online.com/privacy-terms-and-conditions/" rel="noopener noreferrer"
                    target="_blank" className="cookieMoreInfo">
                        More info
                    </a>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <Button variant="contained" color="primary" className="cookieButton" onClick={setCookieFn}>That's fine</Button>
                </div>
            </div>
        </div>
    );

}

export default Cookie;
