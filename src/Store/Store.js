import {configureStore} from '@reduxjs/toolkit';
import Reducer from './Reducers';

const store = configureStore({                      //this will create the store with a reducer
    reducer: Reducer
})

export default store;