import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

class UserMenu extends Component {

    constructor() {
        super();
    };

    axway_logo_url = 'https://cdn.axway.com/globalnav/axway-logo-top.svg';

    static propTypes = {
        selectedItem: PropTypes.number,
        userName: PropTypes.string,
        userPicture: PropTypes.object,
        theme: PropTypes.object,
    };

    static defaultProps = {
        selectedItem: 0,
        userName: 'unknown',
        userPicture: <i className="material-icons">account_circle</i>,
        theme: Configuration.themeSettings,
    };

    userItems = () => {
        return [
            { name: 'Home', link: '/', icon: 'home' },
            { name: 'Forums', link: '/forum', icon: 'forum' },
            { name: 'Profile', link: '/profile', icon: 'verified_user' },
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
        if(e.target.nodeName === 'SPAN'){
            target = e.target.parentElement;
        }
        this.setState({
            selectedItem: target.dataset.key
        });
    }

    render() {

        return (
                <ul className="nav">
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

export default UserMenu;
