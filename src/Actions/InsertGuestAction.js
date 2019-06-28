

export const setName = (value) => {
    return {
        type: 'SET_NAME',
        payload: value.target.value
    }
}


export const setDocument = (value) => {
    return {
        type: 'SET_DOCUMENT',
        payload: value.target.value
    }
}


export const setPhone = (value) => {
    return {
        type: 'SET_PHONE',
        payload: value.target.value
    }
}

