import { combineReducers } from 'redux';
import { reducer as feed } from './feed.reducer';
import { reducer as user } from './user.reducer';
import { reducer as search } from './search.reducer';
import { reducer as app } from './app.reducer';
import { reducer as collection } from './collection.reducer';
import { reducer as createCollection } from './create-collection.reducer';
import { reducer as modal } from './modal.reducer';
import { reducer as link } from './link.reducer';
import { reducer as loader } from './loader.reducer';

export default combineReducers({
    feed,
    user,
    search,
    app,
    collection,
    createCollection,
    modal,
    link,
    loader,
});
