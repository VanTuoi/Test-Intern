// reducers/index.js
import { combineReducers } from 'redux';
import product from '@/lib/features/productSlice'

const rootReducer = combineReducers({
    product: product.reducer,
});

export default rootReducer;
