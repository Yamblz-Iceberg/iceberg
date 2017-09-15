import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from './../..';

import './search__result-item.scss';

class SearchResultItem extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        history: PropTypes.any.isRequired,
    };

    handlerOnClick(e, cardId) {
        this.props.history.push({ pathname: `/collection/${cardId}` });
    }

    render() {
        const { data } = this.props;
        const resultStyles = {
            backgroundImage: `url(${data.photo})`,
            backgroundColor: data.color,
        };

        return (<div className="search-result-item" onClick={e => this.handlerOnClick(e, data._id)}>
            <div className="search-result-item__photo" style={resultStyles} />
            <div className="search-result-item__details">
                <h5 className="search-result-item__title">{data.name}</h5>
                <div className="search-result-item__links-container">
                    <Icon iconName={'link'} iconWidth="24" iconHeight="24" iconColor="#d0d0d0" />
                    <p className="search-result-item__linksCount"> {data.linksCount}</p>
                </div>
            </div>
        </div>);
    }
}

export default withRouter(SearchResultItem);
