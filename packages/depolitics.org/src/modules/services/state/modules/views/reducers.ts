import {
    GENERAL_VIEW,
} from '../../../../data/constants/views';

import {
    SET_GENERAL_VIEW,
} from './types';



const initialState = {
    general: GENERAL_VIEW.LOADING,
}

const viewReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_GENERAL_VIEW:
            return { ...state, general: action.payload };
        default:
            return state;
    }
}


export default viewReducer;
