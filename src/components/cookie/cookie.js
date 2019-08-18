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
                    This website is using cookies.&nbsp;
                    <a href="https://html-online.com/privacy-terms-and-conditions/" rel="noopener noreferrer"
                    target="_blank" className="cookieMoreInfo">
                        More info
                    </a>.
                    <br />
                    <Button variant="contained" color="primary" className="cookieButton" onClick={setCookieFn}>That's fine</Button>
                </div>
            </div>
        </div>
    );

}

export default Cookie;
