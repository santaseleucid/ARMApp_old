//does not make sense to me right now.. 05/04/2019

import { FETCH_USER } from '../actions/types';  

export default function (state = null, action){
    console.log(action); 
    switch (action.type){
        case FETCH_USER:
            return action.payload || false ; 
        default:
        return state;
    }
}