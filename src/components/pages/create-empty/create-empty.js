import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Icon } from './../../elements';
import { CreateCard, CreateEmptyHeader, Option } from './../../blocks';

import './create-empty.scss';

class CreateEmpty extends Component {
    handleSubmitData = e => e;

    render() {
        const createCardProps = {
            userName: 'Pavel',
            avatar: '',
        };

        const optionsProperties = [
            {
                num: 1,
                option: 'Предлагать ссылки',
                noticeText: 'Нотификация1',
            },
            {
                num: 2,
                option: 'Модерировать ссылки',
                noticeText: 'Нотификация2',
            },
        ];

        return (
            <main className="create-empty">
                <CreateEmptyHeader callback={this.handleSubmitData} />
                <div className="create-empty__card-wrapper">
                    <CreateCard data={createCardProps} />
                </div>
                <div className="create-empty__add-description">
                    <Button
                        {...{
                            icon: <Icon iconName={'plus'} />,
                            text: 'Добавить описание',
                            background: 'rgba(255,255,255, 0)',
                        }}
                    />
                </div>
                { optionsProperties.map(option => <Option key={option.num} {...option} />) }
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
