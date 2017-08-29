import { combineReducers } from 'redux';
import { reducer as feed } from './feed.reducer';
import { reducer as user } from './user.reducer';
import { reducer as search } from './search.reducer';
import { reducer as app } from './app.reducer';
import { reducer as collection } from './collection.reducer';

export default combineReducers({
    feed,
    user,
    search,
    app,
    collection,
});
