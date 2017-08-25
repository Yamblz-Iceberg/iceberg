import { combineReducers } from 'redux';
import { reducer as feed } from './feed';
import { reducer as user } from './user';

export default combineReducers({
    feed,
    user,
});
