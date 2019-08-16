import React from 'react';
import "./language.css"

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useTranslation } from 'react-i18next';


const Lang = (state) => {
    const { i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    let langButton
    if(state.lang==='en'){
        langButton=<><span className="flag-en">&ensp;&ensp;&ensp;&ensp;&ensp;</span>&nbsp;En</>
    }
    else if(state.lang==='ru'){
        langButton=<><span className="flag-ru">&ensp;&ensp;&ensp;&ensp;&ensp;</span>&nbsp;Ru</>
    }

    return (
        <div className='LangFloatRight'>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {langButton}
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => {state.onChangeLanguage('en'); i18n.changeLanguage('en'); handleClose()}}><span className="flag-en">&ensp;&ensp;&ensp;&ensp;&ensp;</span>&nbsp;English</MenuItem>
                <MenuItem onClick={() => {state.onChangeLanguage('ru'); i18n.changeLanguage('ru'); handleClose()}}><span className="flag-ru">&ensp;&ensp;&ensp;&ensp;&ensp;</span>&nbsp;Русский</MenuItem>
            </Menu>
            {/* <h1>{state.lang}</h1>
            {t('test')} */}
        </div>
    );
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeLanguage: (l) => dispatch({type: 'ChangeLanguage', value: l})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lang);
