import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateLinkAdd from './add/create-link-add';
import CreateLinkLoad from './load/create-link-load';
import CreateLinkComment from './comment/create-link-comment';


import './create-link.scss';

const CreateLink = props => (
    <Switch>
        <Route
            exact
            path="/create-link/"
            render={() =>
                <CreateLinkAdd collectionTitle={props.collection.name} />
            }
        />
        <Route exact path="/create-link/load-link" component={CreateLinkLoad} />

        <Route
            path="/create-link/load-link/add-comment"
            render={() =>
                <CreateLinkComment />
            }
        />
    </Switch>
);

CreateLink.propTypes = {
    collection: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        collection: state.collection,
    };
}

export default connect(mapStateToProps)(CreateLink);
