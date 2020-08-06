import {
    SetGeneralViewAction,
    SET_GENERAL_VIEW,
} from './types'



export const setGeneralView = (view: string): SetGeneralViewAction => {
    return {
        type: SET_GENERAL_VIEW,
        payload: view,
    };
}
