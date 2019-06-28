const INITIAL_STATE = {
    dateIn: new Date(),
    dateOut: new Date(),
    guest: '',
    isParking: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_DATE_IN':
            return { ...state, dateIn: action.payload };
        case 'SET_DATE_OUT':
            return { ...state, dateOut: action.payload };
        case 'SET_GUEST':
            return { ...state, guest: action.payload };
        case 'SET_PARKING':
            return { ...state, isParking: action.payload };
        case 'RESET_STATE':
            return INITIAL_STATE;
        default:
            return state;

    }
}