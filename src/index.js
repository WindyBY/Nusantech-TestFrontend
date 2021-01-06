import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { createStore, combineReducers } from 'redux';
import  {Provider}  from 'react-redux';

import counterTmbhKrgReducer from './components/reducer/counter/tmbhKurang'
import outputCalcKaliBagi from './components/reducer/counter/kaliBagi'
import inputReducer from './components/reducer/input'
import showReducer from './components/reducer/show'
import reducer from './components/reducer/reducer'

const rootReducer = combineReducers({
    
showCounter:showReducer,
outputCalTmbhKrg : counterTmbhKrgReducer,
outputCalKaliBagi : outputCalcKaliBagi,
inputCal : inputReducer,
reducer 
})

const store = createStore(rootReducer);

ReactDom.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));