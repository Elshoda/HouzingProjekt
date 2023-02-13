import React from 'react';
import PropertiesProvider from './properties';

export const RootContext = ({ childeren }) => {

    return (
            <PropertiesProvider>
                {childeren}
            </PropertiesProvider>
    );
}

export default RootContext;
