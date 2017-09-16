import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreateLinkComment } from '../../blocks';

import CreateLinkAdd from './add/create-link-add';
import CreateLinkLoad from './load/create-link-load';


import './create-link.scss';

const CreateLink = () => (
    <Switch>
        <Route exact path="/create-link/" component={CreateLinkAdd} />
        <Route exact path="/create-link/load-link" component={CreateLinkLoad} />
        <Route path="/create-link/load-link/add-comment" component={CreateLinkComment} />
    </Switch>
);

export default CreateLink;
