const INITIAL_STATE = {
    name: '',
    label: '',
    value: '',
    document: '',
    phone: '',
    person: {},
    disableFields: true
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_NAME_UPDATE':
            return { ...state, name: action.payload, label: action.payload};
        case 'SET_DOCUMENT_UPDATE':
            return { ...state, document: action.payload, value: action.payload };
        case 'SET_PHONE_UPDATE':
            return { ...state, phone: action.payload };
        case 'SET_PERSON_UPDATE':
            return action.payload ;
        case 'RESET_SCREEN_UPDATE':
            return INITIAL_STATE ;
        default:
            return state;

    }
}