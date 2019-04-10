
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import reduxThunk from 'redux-thunk'; 

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));// I don't understand this 


ReactDOM.render(
    <Provider store = {store}><App/></Provider>,//App's state is now being stored in the store... this is black magic i swear
     document.querySelector('#root')
); 