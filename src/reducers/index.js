import { combineReducers } from 'redux';
import productoReducer from './productosReducer';
import validacionReducer from './validacionReducer';

export default combineReducers({
    productos: productoReducer,
    error: validacionReducer
});