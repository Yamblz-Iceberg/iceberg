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

    handlerOnClick = cardId => () => {
        this.props.history.push({ pathname: `/collection/${cardId}` });
    }

    render() {
        const { data } = this.props;
        const resultStyles = {
            backgroundImage: `url(${data.photo})`,
            backgroundColor: data.color,
        };

        return (
            <div className="search__result-item" onClick={this.handlerOnClick(data._id)}>
                <div className="search__result-item-photo" style={resultStyles} />
                <div className="search__result-item-details">
                    <h5 className="search__result-item-title">{data.name}</h5>
                    <div className="search__result-item-links-container">
                        <Icon iconName={'link'} iconColor="#d0d0d0" />
                        <p className="search__result-item-linksCount"> {data.linksCount}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchResultItem);
