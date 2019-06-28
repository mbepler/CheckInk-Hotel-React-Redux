const INITIAL_STATE = {
    showInsert: false,
    presentFilter: true,
    notPresentFilter: true,
    filter: '',
    guests : [],
    checkIns: [],
    calculatedValues:[]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SHOW_INSERT':
            return { ...state, showInsert: action.payload };
        case 'INSERT_GUEST':
            return { ...state,  guests: [...state.guests, action.payload], showInsert: false };
        case 'INSERT_CHECK_IN':
            return { ...state, checkIns: [...state.checkIns, action.payload] };
        case 'SET_FILTER':
            return { ...state, filter: action.payload };
        case 'SET_PRESENT_FILTER':
            return { ...state, presentFilter: action.payload };
        case 'SET_NOT_PRESENT_FILTER':
            return { ...state, notPresentFilter: action.payload };
        case 'CALCULATE_VALUES':
            return { ...state, calculatedValues: [...state.calculatedValues, action.payload] };
        default:
            return state;

    }
}