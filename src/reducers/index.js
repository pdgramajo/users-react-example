import { combineReducers } from 'redux';
import homeReducer from '../home/reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    homeReducer,
    form: reduxFormReducer
});
export default rootReducer;