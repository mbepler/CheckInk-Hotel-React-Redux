import { combineReducers } from 'redux';
import InsertGuestReducer from './InsertGuestReducer';
import InsertCheckInReducer from './InsertCheckInReducer';
import HomeReducer from './HomeReducer';


export default combineReducers({
    InsertGuestReducer: InsertGuestReducer,
    InsertCheckInReducer:InsertCheckInReducer,
    HomeReducer:HomeReducer
});