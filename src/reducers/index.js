import { combineReducers } from 'redux';
import { reducer as feed } from './feed.reducer';
import { reducer as user } from './user.reducer';
import { reducer as app } from './app.reducer';
import { reducer as collection } from './collection.reducer';
import { reducer as createCollection } from './create-collection.reducer';

export default combineReducers({
    feed,
    user,
    app,
    collection,
    createCollection,
});
