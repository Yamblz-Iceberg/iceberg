import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CreateCard, CreateEmptyHeader } from './../../blocks';

import './create-empty.scss';

class CreateEmpty extends Component {
    handleSubmitData = e => e;

    render() {
        const createCardProps = {
            userName: 'Pavel',
            avatar: '',
        };

        return (
            <main className="create-empty">
                <CreateEmptyHeader callback={this.handleSubmitData} />
                <div className="create-empty__card-wrapper">
                    <CreateCard data={createCardProps} />
                </div>
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
