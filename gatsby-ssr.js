import React from 'react';
import SiteWrapper from './src/components/SiteWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export function wrapPageElement({ element, props }) {
  return <SiteWrapper {...props}>
    <ToastContainer 
      position="bottom-center"
      autoClose={5000} 
      theme="light"
    />
    {element}
    </SiteWrapper>;
}