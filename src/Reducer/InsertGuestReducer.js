const INITIAL_STATE = {
    name: '',
    label: '',
    value: '',
    document: '',
    phone: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_NAME':
            return { ...state, name: action.payload, label: action.payload, value:action.payload};
        case 'SET_DOCUMENT':
            return { ...state, document: action.payload };
        case 'SET_PHONE':
            return { ...state, phone: action.payload };
        default:
            return state;

    }
}