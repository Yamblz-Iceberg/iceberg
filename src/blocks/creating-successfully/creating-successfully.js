import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import './creating-successfully.scss';

import { CollectionCard, Button, Icon } from '../../blocks';
import CreatingSuccessfullyHeader from './__header/creating-successfully__header';
import { socialSharing } from '../../utils/shared-functions';

/**
 * Компонент отображения новой коллекции, после её создания.
 * Состоит из шапки, карточки коллекции и кнопки поделиться.
 */
class CreatingSuccessfully extends Component {
    shareLink = (title, message) => () => {
        socialSharing(title, message);
    };

    render() {
        const { collection } = this.props;

        return (
            <div className="creating-successfully">
                <CreatingSuccessfullyHeader />
                <div
                    className="creating-successfully__collection-card-wrapper"
                >
                    <CollectionCard data={collection} isNew />
                </div>
                <div className="creating-successfully__button-wrapper">
                    <Button
                        onClick={this.shareLink(collection.name, collection.description)}
                        icon={<Icon iconName={'share'} />}
                        text="Поделиться"
                    />
                </div>
            </div>
        );
    }
}

CreatingSuccessfully.defaultProps = {
    savedTimesCount: 0,
};

CreatingSuccessfully.propTypes = {
    // history: PropTypes.any.isRequired,
    collection: PropTypes.object.isRequired,
    // savedTimesCount: PropTypes.number,
};

export default connect(
    state => ({
        collection: state.collection,
        // savedTimesCount: state.collection.savedTimesCount,
    }),
)(CreatingSuccessfully);
