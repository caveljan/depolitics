import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StyledRoot } from './styled';

import View from '../View';



interface RootProperties {
    store: any;
}

const Root: React.FC<RootProperties> = (properties) => {
    const {
        store
    } = properties;

    return (
        <StyledRoot>
            <ReduxProvider
                store={store}
            >
                <View />
            </ReduxProvider>
        </StyledRoot>
    );
}


export default Root;
