import React from 'react';
import {
    StyledApp,
} from './styled';

import Root from './Root';
import store from './store';




const initialState = {};
const initializedStore = store(initialState);

const App: React.FC<{}> = () => {
    return (
        <StyledApp>
            <Root
                store={initializedStore}
            />
        </StyledApp>
    );
}

export default App;
