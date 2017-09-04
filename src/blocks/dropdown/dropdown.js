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

    componentWillMount() {

    }

    select = (item) => {
        this.setState({
            selected: item,
        });
        this.props.onSelect(item);
    }

    show = () => {
        this.setState({ listVisible: true });
        document.addEventListener('click', this.hide);
    }

    hide = () => {
        this.setState({ listVisible: false });
        document.removeEventListener('click', this.hide);
    }

    render() {
        const { items } = this.props;
        return (<div className="dropdown">
            <div className="dropdown-selected-item">
                { this.state.selected.title }
            </div>
            <DropdownMenu items={items} select={this.select} />
        </div>);
    }
}

Dropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })),
    selected: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
    items: [],
    selected: '',
};

export default Dropdown;
