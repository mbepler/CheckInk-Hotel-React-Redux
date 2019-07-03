const INITIAL_STATE = {
    showInsert: false,
    showUpdate: false,
    showDelete: false,
    presentFilter: true,
    notPresentFilter: true,
    filter: '',
    guests : [],
    checkIns: [],
    dataGrid:[],
    hotelRegistration:[]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SHOW_INSERT':
            return { ...state, showInsert: action.payload };
        case 'SHOW_UPDATE':
            return { ...state, showUpdate: action.payload };
        case 'SHOW_DELETE':
            return { ...state, showDelete: action.payload };
        case 'INSERT_GUEST':
            return { ...state,   hotelRegistration: action.payload, showInsert: false };
        case 'UPDATE_GUEST':
            return { ...state,   hotelRegistration: action.payload, showUpdate: false };
        case 'DELETE_GUEST':
            return { ...state,   hotelRegistration: action.payload, showDelete: false };
        case 'INSERT_NEW_CHECKIN':
            return { ...state, hotelRegistration: action.payload};
        case 'SET_FILTER':
            return { ...state, filter: action.payload };
        case 'SET_PRESENT_FILTER':
            return { ...state, presentFilter: action.payload };
        case 'SET_NOT_PRESENT_FILTER':
            return { ...state, notPresentFilter: action.payload };
        case 'CALCULATE_VALUES':
            return { ...state, dataGrid:  action.payload };
        case 'INSERT_INITIAL_DATA':
            return { ...state, hotelRegistration:action.payload};
        case 'INSERT_INITIAL_CHECKIN':
            return { ...state, checkIns: action.payload  };
        default:
            return state;

    }
}