import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon, Button } from '../../../blocks';

import './create-link-header.scss';

class AddLinkHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: false,
        };
    }
    handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        const isDisabled = true;
        return (
            <header className="create-link-header">
                <div className="create-link-header__container">
                    <div className="create-link-header__block">
                        <span onClick={this.handleGoBack}>
                            <Icon iconName={'arrow-back'} iconColor="#000" />
                        </span>
                        <h4 className="create-link-header__title">
                            {this.props.collectionTitle}
                        </h4>
                    </div>
                    <div className="create-link-header__block">
                        <Button text="Добавить" size="small" isDisabled={isDisabled} />
                    </div>
                </div>
            </header>
        );
    }
}

AddLinkHeader.propTypes = {
    collectionTitle: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
};

export default withRouter(AddLinkHeader);
