import { combineReducers} from 'redux';
import productsReducers from './products/products.reducers.js';
import userReducers from './user/user.reducers.js';

export default combineReducers({
    productsReducers,
    userReducers
});

