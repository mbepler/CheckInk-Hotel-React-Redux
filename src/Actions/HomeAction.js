

export const showInsertScreen = () => {
    return {
        type: 'SHOW_INSERT',
        payload: true
    }
}

export const closeInsertScreen = () => {
    return {
        type: 'SHOW_INSERT',
        payload: false
    }
}


export const insertGuest = (guest) => {
        if(guest.name && guest.document && guest.phone){
            return {
                type: 'INSERT_GUEST',
                payload: guest
            }
        }else{
            alert('Campos obrigatórios não preenchidos')
        }

}


export const insertCheckIn= (checkIn) => {
    if(checkIn.dateIn && checkIn.dateOut && checkIn.guest){
        return {
            type: 'INSERT_CHECK_IN',
            payload: checkIn
        }
    }else{
        alert('Campos obrigatórios não preenchidos')
    }
}

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: filter.target.value
    }
}

export const setPresentFilter = (value) => {
    return {
        type: 'SET_PRESENT_FILTER',
        payload: !value
    }
}

export const setNotPresentFilter = (value) => {
    return {
        type: 'SET_NOT_PRESENT_FILTER',
        payload: !value
    }
}

export const calculateValues = (value) => {
    console.log(value)
    var dataGrid = []; 
    for(var guest in value.guests){
        var data = {};
        data.name = guest.name;
       
        dataGrid = [...dataGrid, data]
    }
    console.log(dataGrid)
    return {
        type: 'CALCULATE_VALUES',
        payload: dataGrid
    }
}
