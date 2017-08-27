import { combineReducers } from 'redux';
import { reducer as feed } from './feed.reducer';
import { reducer as user } from './user.reducer';

export default combineReducers({
    feed,
    user,
});
