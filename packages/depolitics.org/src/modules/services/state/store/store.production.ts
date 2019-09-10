import {
    createStore,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



const store = (preloadedState: any) => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
        thunk,
    ),
);


export default store;