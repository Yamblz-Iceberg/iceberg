import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CreateLinkHeader } from './../../blocks';
import { Button, Icon } from './../../elements';

import './create-link.scss';

class CreateLink extends Component {
    handlAdd = () => {
        alert('да хуй та там плавал!');
    }
    render() {
        const { collection } = this.props;
        const icanPlus = (
            <Icon iconName={'plus'} />
        );
        return (
            <div className="create-link__container">
                <CreateLinkHeader collectionTitle={collection.name} />
                <div className="create-link__body">
                    <Button type="light" size="max-width" text="добавить из моих" icon={icanPlus} onClick={this.handlAdd} />
                </div>
            </div>
        );
    }
}

CreateLink.propTypes = {
    collection: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        collection: state.collection,
    };
}

export default connect(mapStateToProps)(CreateLink);
