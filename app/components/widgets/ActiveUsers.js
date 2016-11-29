import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

class ActiveUsers extends Component {

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
            { name: 'Stephen Glassnig', username : 'sglass', link: '/', avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
            { name: 'Bo Disworth', username : 'bodi', link: '/forum', avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
            { name: 'Robert Hemwick', username : 'rock', link: '/profile', avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
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
                <li className="heading">Active Users</li>
                    {this.userItems().map((item, index) => {
                        return <li key={index} className={(index == this.state.selectedItem) ? 'nav-item active' : 'nav-item'}>
                            <a className="nav-link" href="{item.link}" data-key={index} onClick={this.handleClick}>
                                <img src={item.avatar} />
                                {item.name}
                                <strong>@{item.username}</strong>
                            </a>
                        </li>
                    })}
                </ul>
        );
    };
}

export default ActiveUsers;
