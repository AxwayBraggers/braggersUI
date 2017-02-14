import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

import Request from '../../utils/Request';
import Settings from '../../utils/Settings';

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
        return [];
    };

    componentWillMount() {
        this.state = {
            selectedItem: this.props.selectedItem,
            userName: this.props.userName,
            userPicture: this.props.userPicture,
            theme: this.props.theme,
            userItems: this.userItems(),
        };
    };

    componentDidMount() {
        //Fetch user data
        let req = new Request();
        let settings = new Settings();
        req.get(settings.baseUrl + "/api/github/users/", (response) => {
            var body = response;
            if (typeof body === 'string') {
                body = JSON.parse(body);
            }
            if (body.authusers.length > 0) {
                var userData = new Array();
                body.authusers.map((user, index) => {
                    userData[index] = {
                        name: user.displayName,
                        username: user.username,
                        link: user.profileUrl,
                        avatar: user.data.avatar_url,
                    }
                });
                this.setState({
                    userItems: userData,
                });
            }
        });
    }

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
                {this.state.userItems.map((item, index) => {
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
