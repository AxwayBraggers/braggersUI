import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

class Settings extends Component {

    constructor() {
        super();
    };

    static propTypes = {
        selectedItem: PropTypes.number,
        userName: PropTypes.string,
        userPicture: PropTypes.object,
        theme: PropTypes.object,
    };

    static defaultProps = {
        selectedItem: -1,
        userName: 'unknown',
        userPicture: <i className="material-icons">account_circle</i>,
        theme: Configuration.themeSettings,
    };

    userItems = () => {
        return [
            { name: 'General Settings', icon: 'settings', action: '' },
            { name: 'Profile Settings', icon: 'person_pin', action: '' },
            { name: 'Logout Settings', icon: 'assignment_return', action: '' },
        ];
    };

    componentWillMount() {
        this.state = {
            selectedItem: this.props.selectedItem,
            userName: this.props.userName,
            userPicture: this.props.userPicture,
            theme: this.props.theme,
        };
    };

    handleClick = (e) => {
        e.preventDefault();
        var target = e.target;
        this.setState({
            selectedItem: target.dataset.key
        });
    }

    render() {

        return (
            <ul className="nav activeUsers">
                <li className="heading">Settings Menu</li>
                {this.userItems().map((item, index) => {
                    return <li key={index} className={(index == this.state.selectedItem) ? 'nav-item active' : 'nav-item'}>
                        <a className="nav-link" href="{item.link}" data-key={index} onClick={this.handleClick}>
                            <i className="material-icons">{item.icon}</i>
                            {item.name}
                        </a>
                    </li>
                })}
            </ul>
        );
    };
}

export default Settings;
