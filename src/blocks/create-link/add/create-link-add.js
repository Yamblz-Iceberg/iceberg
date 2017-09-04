import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Icon } from '../../../blocks';
import { compareLinks } from '../../../utils/shared-functions';
import CreateLinkHeader from '../header/create-link-header';
import { actions as modalActions } from '../../../reducers/modal.reducer';

import './create-link-add.scss';

class CreateLinkAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            linkAdded: false,
            collection: props.collection,
        };
    }
    handleAdd = () => {
        const enteredLink = this.state.url;
        const linksInCollection = this.state.collection.links;
        const linkExist =
            linksInCollection.filter(link => compareLinks(link.url, enteredLink)).length > 0;
        if (linkExist) {
            // show modal
            this.props.showModal('ERROR_MESSAGE',
                {
                    title: 'Ошибка при добавлении',
                    text: 'Упс! Кажется, такая ссылка уже добавлена в эту подборку.',
                    buttonText: 'Ясненько',
                });
        } else {
            this.props.history.push({ pathname: '/create-link/load-link', state: this.state.url });
        }
    };
    handleChangeUrl = (event) => {
        this.setState({ url: event.target.value });
        const linkAdded = event.target.value.length > 4;
        this.setState({ linkAdded });
    };
    clearLink = () => {
        this.setState({
            ...this.state,
            url: '',
            linkAdded: false,
        });
    };
    render() {
        const showAddButton = false;
        return (
            <main className="create-link-add">
                <CreateLinkHeader
                    title={this.props.collection.name}
                    showAddButton={showAddButton}
                />
                <section className="create-link-add__body">
                    <div className="create-link-add__input-wrap">
                        <input
                            type="text"
                            value={this.state.url}
                            placeholder="Вставьте ссылку сюда"
                            onChange={this.handleChangeUrl}
                            autoFocus
                        />
                        {
                            this.state.linkAdded
                                ? <span className="create-link-add__close-icon" onClick={this.clearLink}><Icon iconName={'close'} /></span>
                                : <Icon iconName={'link'} iconColor="#d3d3d3" />
                        }
                    </div>
                    <Button
                        type="light"
                        size="medium"
                        text="далее"
                        onClick={this.handleAdd}
                        isDisabled={!this.state.linkAdded}
                    />
                </section>
            </main>
        );
    }
}


CreateLinkAdd.propTypes = {
    collection: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
    showModal: PropTypes.func.isRequired,
};

export default connect(
    state => ({ collection: state.collection }),
    { ...modalActions },
)(withRouter(CreateLinkAdd));
