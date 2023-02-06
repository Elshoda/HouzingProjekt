import React from 'react';
import { createContext } from 'react';
import PropertiesProvider from './properties';

const Root = createContext()

export const RootContext = ({ childeren }) => {

    return (
        <Root.Provider>
            <PropertiesProvider>
                {childeren}
            </PropertiesProvider>
        </Root.Provider>
    );
}

export default RootContext;
