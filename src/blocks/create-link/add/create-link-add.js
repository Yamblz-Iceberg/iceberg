import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Icon } from '../../../blocks';

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
        this.props.history.push('/create-link/load-link');
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
        return (
            <div className="create-link__body">
                <div className="create-link__input-wrap">
                    <input
                        type="text"
                        value={this.state.url}
                        placeholder="Вставьте ссылку сюда"
                        onChange={this.handleChangeUrl}
                        autoFocus
                    />
                    {
                        this.state.linkAdded
                            ? <span className="create-link__close-icon" onClick={this.clearLink}><Icon iconName={'close'} /></span>
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
            </div>
        );
    }
}


CreateLinkAdd.propTypes = {
    history: PropTypes.any.isRequired,
};

export default withRouter(CreateLinkAdd);
