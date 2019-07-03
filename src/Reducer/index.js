import { combineReducers } from 'redux';
import InsertGuestReducer from './InsertGuestReducer';
import UpdateGuestReducer from './UpdateGuestReducer';
import DeleteGuestReducer from './DeleteGuestReducer';

import InsertCheckInReducer from './InsertCheckInReducer';
import HomeReducer from './HomeReducer';


export default combineReducers({
    InsertGuestReducer: InsertGuestReducer,
    UpdateGuestReducer: UpdateGuestReducer,
    InsertCheckInReducer:InsertCheckInReducer,
    DeleteGuestReducer:DeleteGuestReducer,
    HomeReducer:HomeReducer
});