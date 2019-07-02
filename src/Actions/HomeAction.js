import _ from 'lodash';

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
    if(checkIn.dateIn > checkIn.dateOut){
        alert('Data de entrada menor que data de saída')
    }else if(checkIn.dateIn && checkIn.dateOut && checkIn.guest){
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
    if(value.checkIns){ 
        var grouped = _.groupBy(value.checkIns, function(data) {
            return data.guest.name;
        });
        var filterList = filterListGuests(grouped,value)
        var dataGrid = []; 
        for(var index in filterList){
            var clientCheckIn= filterList[index];
            var total = 0.00;
            for(var index2 in clientCheckIn){
                var check= clientCheckIn[index2];
                total += getTotalHotel(check)
            }
            dataGrid = [...dataGrid, getDataGrid(check,total)]
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

function getDataGrid(check, total){
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    var data = {};
    data.name = check.guest.name;
    data.document = check.guest.document;
    data.total = formatter.format(total);
    return data;
}

function filterListGuests (dataGrouped, props){
    var list = [];
    for(var index in dataGrouped){
        var clientCheckIn= dataGrouped[index];
        var guestName = clientCheckIn[0].guest.name;
        var guestDocument = clientCheckIn[0].guest.document;
        var isInHotel = clientIsInHotel(clientCheckIn);
        if(!((props.notPresentFilter && !isInHotel) || (props.presentFilter && isInHotel))) {
            continue;
        }
        if(props.filter && 
            (!guestName.toUpperCase().includes(props.filter.toUpperCase()) 
            && !guestDocument.toUpperCase().includes(props.filter.toUpperCase())) ){
            continue;
        }
        list.push(clientCheckIn)   
    }
    return list;
}



function clientIsInHotel(clientCheckIn) {
    var today = new Date();
    var isInHotel = false;
    for(var index in clientCheckIn){
        var checkInClient = clientCheckIn[index];
        if(checkInClient.dateIn <= today && checkInClient.dateOut >= today ){
            isInHotel = true;
            break;
        }
    }
    return isInHotel;
}


export const loadInitialGuest = (jsonObject) => {
    var guestList = [];
    for(var index in jsonObject){
        var person = jsonObject[index];
        var guest = {};
        guest.name = person.nome;
        guest.label = person.nome;
        guest.value = person.nome;
        guest.document = person.documento;
        guest.phone = person.telefone;
        guestList = [...guestList, guest];
    }
    return {
        type: 'INSERT_INITIAL_GUEST',
        payload: guestList
    }
}

export const loadInitialCheckIn = (jsonObject) => {
    var checkInList = [];
    for(var index in jsonObject){
        var checkIn = {};
        var checkInInitial = jsonObject[index];
        checkIn.dateIn = new Date(checkInInitial.dataEntrada);
        checkIn.dateOut = new Date(checkInInitial.dataSaida);
        checkIn.isParking = checkInInitial.adicionalVeiculo;
        var person = checkInInitial.pessoa;
        var guest = {};
        guest.name = person.nome;
        guest.label = person.nome;
        guest.value = person.nome;
        guest.document = person.documento;
        guest.phone = person.telefone;
        checkIn.guest = guest;

        checkInList = [...checkInList, checkIn];
    }
    return {
        type: 'INSERT_INITIAL_CHECKIN',
        payload: checkInList
    }
}
