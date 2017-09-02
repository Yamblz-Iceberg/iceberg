import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Icon } from '../../../blocks';
import CreateLinkHeader from '../header/create-link-header';

import './create-link-add.scss';

class CreateLinkAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            linkAdded: false,
        };
    }
    handleAdd = () => {
        this.props.history.push({ pathname: '/create-link/load-link', state: this.state.url });
    };
    handleChangeUrl = (event) => {
        this.setState({ url: event.target.value });
        const linkAdded = /^[a-z0-9]+:\/\//.test(event.target.value) && event.target.value.length > 10;
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
                    title={this.props.collectionTitle}
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
    collectionTitle: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
};

export default withRouter(CreateLinkAdd);
