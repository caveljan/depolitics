import { combineReducers } from 'redux';

import views from '../modules/views/reducers';



const rootReducer = combineReducers({
    views,
});


export default rootReducer;
