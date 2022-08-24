import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './features/authSlice';
import DataReducer from './features/dataSlice'

export default configureStore({
    reducer : {
        auth : AuthReducer,
        data : DataReducer
    }
})