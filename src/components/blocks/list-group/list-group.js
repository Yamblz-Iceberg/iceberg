import React from 'react';
import PropTypes from 'prop-types';

import { ListGroupItem } from './../../elements';

import './list-group.scss';

const ListGroup = ({ items }) => (
    <div className="list-group-wrap">
        <div className="list-group">
            { items.map(item => (<ListGroupItem key={item.id} data={item} />))}
        </div>
    </div>
);

ListGroup.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ).isRequired,
};

export default ListGroup;
