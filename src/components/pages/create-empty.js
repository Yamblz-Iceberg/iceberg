import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CreateCard } from './../blocks';

class CreateEmpty extends Component {
    onElementClick = e => e;
    render() {
        const createCardProps = {
            userName: 'Pavel',
            avatar: '',
        };
        return (
            <main>
                <CreateCard data={createCardProps} />
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        collection: state.collection,
    };
}

export default connect(mapStateToProps)(CreateEmpty);
