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

export const showDeleteScreen = () => {
    return {
        type: 'SHOW_DELETE',
        payload: true
    }
}

export const closeDeleteScreen = () => {
    return {
        type: 'SHOW_DELETE',
        payload: false
    }
}

export const showUpdateScreen = () => {
    return {
        type: 'SHOW_UPDATE',
        payload: true
    }
}

export const closeUpdateScreen = () => {
    return {
        type: 'SHOW_UPDATE',
        payload: false
    }
}

export const deleteGuest = (deleteGuest , hotelRegistration) => {
    var newHotelRegistration = hotelRegistration.filter(hotelBook => hotelBook.guest !== deleteGuest)
    return {
        type: 'DELETE_GUEST',
        payload: newHotelRegistration
    }
}
export const updateGuest = (updatedGuest, hotelRegistration) => {
    if(updatedGuest.name && updatedGuest.document && updatedGuest.phone && updatedGuest.person){

        for(var index in hotelRegistration){
            if(hotelRegistration[index].guest === updatedGuest.person){
                var updated = {
                    name: updatedGuest.name,
                    label: updatedGuest.name,
                    value: updatedGuest.document,
                    document: updatedGuest.document,
                    phone: updatedGuest.phone,
                }
                hotelRegistration[index].guest = updated;
                var edit = [...hotelRegistration];
            }
        }
        return {
            type: 'UPDATE_GUEST',
            payload: edit
        }
    }else{
        alert('Campos obrigatórios não preenchidos')
    }
    return{type:'ERROR'};

}

export const insertGuest = (guest, hotelRegistration) => {
        if(guest.name && guest.document && guest.phone){
            var isDuplicated = hotelRegistration.find(register => register.guest.document === guest.document);
            if(isDuplicated){
                alert('Hóspede com esse documento já cadastrado');
                return{type:'ERROR'};
            }
            var newRegister = {
                guest:guest,
                checkIn:[]
            }
            if(hotelRegistration){
                hotelRegistration = [...hotelRegistration, newRegister];
            }else{
                hotelRegistration = [newRegister];
            }
            return {
                type: 'INSERT_GUEST',
                payload: hotelRegistration
            }
        }else{
            alert('Campos obrigatórios não preenchidos')
        }
        return{type:'ERROR'};

}


export const insertCheckIn= (checkIn, hotelRegistration) => {
    if(checkIn.dateIn > checkIn.dateOut){
        alert('Data de entrada menor que data de saída')
    }else if(checkIn.dateIn && checkIn.dateOut && checkIn.guest){
        var register = hotelRegistration.find(data => data.guest === checkIn.guest);
        var newCheckIn = {
            dateIn: checkIn.dateIn,
            dateOut: checkIn.dateOut,
            isParking: checkIn.isParking
        }
        register.checkIn.push(newCheckIn);
    
        return {
            type: 'INSERT_NEW_CHECKIN',
            payload: hotelRegistration
        }
    }else{
        alert('Campos obrigatórios não preenchidos')
    }
    return{type:'ERROR'};
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



export const calculateValues = (props) => {
    if(props.hotelRegistration){ 
        var filterList = filterListGuests(props)
        var dataGrid = []; 
        for(var index in filterList){
            var register= filterList[index];
            var total = 0.00;
            for(var index2 in register.checkIn){
                var checkIn= register.checkIn[index2];
                total += getTotalHotel(checkIn)
            }
            dataGrid = [...dataGrid, getDataGrid(register.guest,total)]
        }
        return {
            type: 'CALCULATE_VALUES',
            payload: (dataGrid.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
        }
    }else{
        return {
            type: 'CALCULATE_VALUES',
            payload: dataGrid
        }
    }
}

function getTotalHotel(checkIn){
    var startDate = checkIn.dateIn;
    var endDate = checkIn.dateOut;
    
    var daysOfWeek = getBusinessDatesCount(startDate,endDate);

    var weekDayCount = daysOfWeek.weekDayCount;
    var weekendDayCount = daysOfWeek.weekendDayCount;
    var countDays = weekDayCount+ weekendDayCount;
    if(isCheckOutBeforeFourAndHalfPm(endDate) && countDays > 1){
        if(isCheckOutWeekDay(endDate)){
            weekDayCount--;
        }else{
            weekendDayCount--;
        }
    }
    var parkingPrice = 0 ;
    if(checkIn.isParking){
        parkingPrice = ((weekDayCount * 15) + (weekendDayCount * 20));
    }
    var total = ((weekDayCount * 120) + (weekendDayCount * 150));
    return (total + parkingPrice);
}

function isCheckOutWeekDay(checkOut){
    var weekDay = false;
    var dayOfWeek = checkOut.getDay();
    if(!((dayOfWeek == 6) || (dayOfWeek == 0))){
        weekDay = true;
    }
    return weekDay;
}

function isCheckOutBeforeFourAndHalfPm(endDate){
    var lastDayMinutes = endDate.getMinutes();
    var lastDayHour = endDate.getHours();
    if(lastDayHour > 16){
        return false
    }if(lastDayHour == 16 && lastDayMinutes > 30){
        return false
    }
    return true;
}

function getBusinessDatesCount(startDate, endDate) {
    var weekDayCount = 0;
    var weekendDayCount = 0;
    var curDate = new Date(new Date(startDate).setHours(0,0,0,0));
    var finalDate =new Date( new Date(endDate).setHours(0,0,0,0));
    while (curDate <= finalDate) {
        var dayOfWeek = curDate.getDay();
        if(!((dayOfWeek == 6) || (dayOfWeek == 0))){
            weekDayCount++;
        }else{
            weekendDayCount++;
        }
        curDate.setDate(curDate.getDate() + 1);
    }
    var infoData = {weekDayCount:weekDayCount, 
                    weekendDayCount:weekendDayCount};
    return infoData;
}

function getDataGrid(guest, total){
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    var data = {};
    data.name = guest.name;
    data.document = guest.document;
    data.total = formatter.format(total);
    return data;
}

function filterListGuests (props){
    var list = [];
    var hotelRegistration = props.hotelRegistration;
    for(var index in hotelRegistration){
        var register= hotelRegistration[index];
        var guestName = register.guest.name;
        var guestDocument = register.guest.document;
        var isInHotel = clientIsInHotel(register);
        if(!((props.notPresentFilter && !isInHotel) || (props.presentFilter && isInHotel))) {
            continue;
        }
        if(props.filter && 
            (!guestName.toUpperCase().includes(props.filter.toUpperCase()) 
            && !guestDocument.toUpperCase().includes(props.filter.toUpperCase())) ){
            continue;
        }
        list.push(register)   
    }
    return list;
}



function clientIsInHotel(register) {
    var today = new Date();
    var isInHotel = false;
    for(var index in register.checkIn){
        var checkInClient = register.checkIn[index];
        if(checkInClient.dateIn <= today && checkInClient.dateOut >= today ){
            isInHotel = true;
            break;
        }
    }
    return isInHotel;
}


export const loadInitialData = (guests, checkIns) => {
    var hotelRegistration = [];
    for(var index in guests){
        var person = guests[index];
        var guest = {};
        guest.name = person.nome;
        guest.label = person.nome;
        guest.value = person.documento;
        guest.document = person.documento;
        guest.phone = person.telefone;
        var newCheckIn = checkIns.find(data => data.pessoa.documento === guest.document);
        var checkIn = {
            dateIn:  new Date(newCheckIn.dataEntrada),
            dateOut:  new Date(newCheckIn.dataSaida),
            isParking: newCheckIn.adicionalVeiculo
        }
        hotelRegistration.push({guest:guest,checkIn:[checkIn]});
    }
    return {
        type: 'INSERT_INITIAL_DATA',
        payload: hotelRegistration
    }
}

