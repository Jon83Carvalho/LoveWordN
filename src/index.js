import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';




const width=960; 
const height=500;
const margin={
  top:0,
  right:0,
  bottom:0,
  left:0
};

const rootElement = document.getElementById('root');


ReactDOM.render(<App/>,rootElement);
