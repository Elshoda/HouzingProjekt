import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import value from './value';

const PropertiesContext=createContext()

const PropertiesProvider = ({childern}) => {
    const[state,dispatch]=useReducer(reducer,value)
  return (
    <PropertiesContext.Provider>
      {childern}
    </PropertiesContext.Provider>
  );
}

export default PropertiesProvider;
