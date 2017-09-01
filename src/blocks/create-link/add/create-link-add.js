import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Icon } from '../../../blocks';

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
                    <Icon iconName={'link'} iconColor="#d3d3d3" iconWidth="24" iconHeight="24" />
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
