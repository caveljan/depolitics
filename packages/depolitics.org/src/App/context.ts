import React from 'react';



export interface InitialContext {
    [key: string]: any;
}

const initialContext: InitialContext = {
}


const context = React.createContext(initialContext);


export default context;
