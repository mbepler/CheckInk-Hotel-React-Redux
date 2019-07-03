const INITIAL_STATE = {
    person: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_PERSON_DELETE':
            return { ...state, person: action.payload };
        case 'RESET_SCREEN_DELETE':
            return INITIAL_STATE ;
        default:
            return state;

    }
}