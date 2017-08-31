import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from './../..';

import './search-result-item.scss';
import { cardBlue } from '../../../variables.scss';

class SearchResultItem extends Component {
    handlerOnClick(e, cardId) {
        this.props.history.push({ pathname: './collection-detail', state: cardId });
    }

    render() {
        const { data } = this.props;
        const resultStyles = {
            backgroundImage: `url(${data.photo})`,
            backgroundColor: cardBlue,
        };

        return (<div className="search-result-item" onClick={e => this.handlerOnClick(e, data.id)}>
            <div className="search-result-item__photo" style={resultStyles} />
            <div className="search-result-item__details">
                <h5 className="search-result-item__title">{data.title}</h5>
                <div className="search-result-item__links-container">
                    <Icon iconName={'link'} iconWidth="24" iconHeight="24" iconColor="#d0d0d0" />
                    <p className="search-result-item__linksCount"> {data.linksCount}</p>
                </div>
            </div>
        </div>);
    }
}

SearchResultItem.propTypes = {
    data: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
};

export default withRouter(SearchResultItem);
