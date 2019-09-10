import {
    createStore,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';



const store = (preloadedState: any) => {
    const middleware = [ thunk ];

    const _store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(...middleware),
        ),
    );

    return _store;
}


export default store;
