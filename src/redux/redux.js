const initialState = {
    lang: 'en'
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ChangeLanguage':
            return {lang: action.value};
        default:
    }
    return state;
};

export default reducer;