import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './creating-successfully.scss';

import { CollectionCard, Button, Icon } from '../../blocks';
import CreatingSuccessfullyHeader from './header/creating-successfully-header';

class CreatingSuccessfully extends Component {
    handleClick = e => e;

    render() {
        const { collection } = this.props.history;

        return (
            <div className="creating-successfully">
                <CreatingSuccessfullyHeader />
                <div className="creating-successfully__collection-card-wrapper">
                    <CollectionCard data={collection} />
                </div>
                <div className="creating-successfully__button-wrapper">
                    <Button
                        onClick={this.handleClick}
                        icon={<Icon iconName={'share'} />}
                        text="Поделиться"
                    />
                </div>
            </div>
        );
    }
}

CreatingSuccessfully.propTypes = {
    history: PropTypes.any.isRequired,
};

export default withRouter(CreatingSuccessfully);
