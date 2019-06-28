

export const setDateIn = (value) => {
    return {
        type: 'SET_DATE_IN',
        payload: value
    }
}


export const setDateOut = (value) => {
    return {
        type: 'SET_DATE_OUT',
        payload: value
    }
}


export const setGuest= (value) => {
    return {
        type: 'SET_GUEST',
        payload: value.target.value
    }
}

export const setParking = (value) => {
    return {
        type: 'SET_PARKING',
        payload: !value
    }
}

export const resetState = () => {
    return {
        type: 'RESET_STATE',
    }
}