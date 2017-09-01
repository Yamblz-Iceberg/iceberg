import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateLinkAdd from './add/create-link-add';
import CreateLinkLoad from './load/create-link-load';

import './create-link.scss';

const CreateLink = props => (
    <div className="create-link">
        <Switch>
            <Route
                exact
                path="/create-link/"
                render={() =>
                    <CreateLinkAdd collectionTitle={props.collection.name} />
                }
            />
            <Route path="/create-link/load-link" component={CreateLinkLoad} />
        </Switch>
    </div>
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
