import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateLinkHeader from './header/create-link-header';
import { Button, Icon } from '../../elements/index';

import './create-link.scss';

class CreateLink extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.link;
    }
    handleAdd = () => {
        alert('Еще не готово!');
    };
    handleChangeUrl = (event) => {
        this.setState({ url: event.target.value });
    };
    render() {
        const { collection } = this.props;
        const iconPlus = (
            <Icon iconName={'plus'} />
        );
        return (
            <div className="create-link__container">
                <CreateLinkHeader collectionTitle={collection.name} />
                <div className="create-link__body">
                    <div className="create-link__input-wrap">
                        <input type="text" value={this.state.url} placeholder="Вставьте ссылку сюда" onChange={this.handleChangeUrl} autoFocus />
                        <Icon iconName={'link'} iconColor="#d3d3d3" iconWidth="24" iconHeight="24" />
                    </div>
                    <Button type="light" size="max-width" text="добавить из моих" icon={iconPlus} onClick={this.handleAdd} />
                </div>
            </div>
        );
    }
}

CreateLink.propTypes = {
    collection: PropTypes.object.isRequired,
    link: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        collection: state.collection,
        link: state.link,
    };
}

export default connect(mapStateToProps)(CreateLink);
