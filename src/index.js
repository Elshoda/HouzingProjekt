import React, { StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Root from './root';

const root = createRoot(document.getElementById('root'));
root.render( 
  <StrictMode >
    <Root/>
  </StrictMode>
);
//