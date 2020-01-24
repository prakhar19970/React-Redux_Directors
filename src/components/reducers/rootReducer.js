import { combineReducers } from 'redux';
import getdirectors from './getdirectors';


export default combineReducers({
    director: getdirectors
})