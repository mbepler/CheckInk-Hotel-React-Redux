

export const setPerson = (value) => {
    if(value){
        var updatedGuest = {
            name: value.name,
            label: value.name,
            value: value.document,
            document: value.document,
            phone: value.phone,
            person: value,
            disableFields: false
        }
    
        return {
            type: 'SET_PERSON_UPDATE',
            payload: updatedGuest
        }
    }else{
        return {
            type: 'RESET_SCREEN_UPDATE'
        }
    }
    
}

export const reset = () => {
    return {
        type: 'RESET_SCREEN_UPDATE'
    }
}

export const setName = (value) => {
    return {
        type: 'SET_NAME_UPDATE',
        payload: value.target.value
    }
}


export const setDocument = (value) => {
    return {
        type: 'SET_DOCUMENT_UPDATE',
        payload: value.target.value
    }
}


export const setPhone = (value) => {
    return {
        type: 'SET_PHONE_UPDATE',
        payload: value.target.value
    }
}

