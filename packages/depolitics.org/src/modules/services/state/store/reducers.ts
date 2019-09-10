import { combineReducers } from 'redux';

import views from '../modules/services/state/modules/views/reducers';



const rootReducer = combineReducers({
    views,
});


export default rootReducer;
