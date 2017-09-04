import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateLinkAdd from './add/create-link-add';
import CreateLinkLoad from './load/create-link-load';
import CreateLinkComment from './comment/create-link-comment';


import './create-link.scss';

const CreateLink = () => (
    <Switch>
        <Route exact path="/create-link/" component={CreateLinkAdd} />
        <Route exact path="/create-link/load-link" component={CreateLinkLoad} />
        <Route path="/create-link/load-link/add-comment" component={CreateLinkComment} />
    </Switch>
);

export default CreateLink;
