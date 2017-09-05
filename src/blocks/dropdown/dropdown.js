import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from './menu/dropdown-menu';
import './dropdown.scss';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        const { selected, items } = this.props;
        this.state = {
            selected: selected ?
                items[items.findIndex(x => x.title === selected)] : items[0],
            istVisible: false,
        };
    }

    componentWillReceiveProps(prevProps) {
        if (prevProps.items[0].name !== this.props.items[0].name) {
            this.select(prevProps.items[0]);
        }
    }

    select = (item) => {
        this.setState({
            selected: item,
        });
        this.props.onSelect(item);
        this.setState({ istVisible: false });
    }

    show = () => {
        this.setState({ istVisible: true });
    }

    hide = () => {
        this.setState({ istVisible: false });
    }

    render() {
        const { items } = this.props;
        return (<div className="dropdown">
            <div className="dropdown-selected-item" onClick={this.state.istVisible ? this.hide : this.show}>
                { this.state.selected.title }
            </div>
            <DropdownMenu items={items} select={this.select} show={this.state.istVisible} />
        </div>);
    }
}

Dropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })),
    selected: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
    items: [],
    selected: '',
};

export default Dropdown;
