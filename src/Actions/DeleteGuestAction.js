

export const setPerson = (value) => {
        return {
            type: 'SET_PERSON_DELETE',
            payload: value
        }
}

export const reset = () => {
    return {
        type: 'RESET_SCREEN_DELETE'
    }
}

