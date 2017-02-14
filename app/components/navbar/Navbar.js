import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';
import Request from '../../utils/Request';
import Settings from '../../utils/Settings';

class Navbar extends Component {

    constructor() {
        super();
    };

    axway_logo_url = 'https://cdn.axway.com/globalnav/axway-logo-top.svg';

    static propTypes = {
        selectedItem: PropTypes.number,
        userData: PropTypes.object,
        theme: PropTypes.object,
    };

    static defaultProps = {
        selectedItem: 0,
        theme: Configuration.themeSettings,
    };

    items = () => {
        return [
            { name: 'Home', link: '' },
            { name: 'Blogs', link: '' },
            { name: 'Forums', link: '' },
        ]
    };

    userData = () => {
        return {
            displayName: 'unknown',
            data: {
                avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            }
        };
    };

    userItems = () => {
        return [
            { name: 'Profile', link: '', icon: 'account cirlcle' },
            { name: 'Sign Out', link: '', icon: 'account cirlcle' },
        ];
    };

    componentWillMount() {
        this.state = {
            selectedItem: this.props.selectedItem,
            userData: this.userData(),
            theme: this.props.theme,
        };
    };

    componentDidMount() {
        //Fetch user data
        let req = new Request();
        let settings = new Settings();
        let self = this;
        req.get(settings.baseUrl + "/api/github/logged", (response) => {
            var body = response;
            if (typeof body === 'string') {
                body = JSON.parse(body);
            }
            var _data = body.authuser;
            self.setState({
                userData: _data
            });
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
        const items = this.items();

        return (

            <nav className={this.state.theme.navbarClass}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={axwayLogo} height="20" alt="Axway | Imagination takes shape" />
                        <span style={{ marginLeft: '10px' }}>Axway <strong>Braggers</strong></span>
                    </a>


                    <ul className="nav navbar-nav col-xs-12 col-md-8">
                        <li className="nav-item col-xs-12">
                            <form className="form-inline">
                                <input className="form-control" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success" type="submit">
                                    <i className="material-icons">search</i>
                                </button>
                            </form>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav col-xs-12 col-md-2">
                        <li className="nav-item dropdown float-xs-right">
                            <a className="nav-link dropdown-toggle" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={this.state.userData.data.avatar_url} />
                                {this.state.userData.displayName}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="supportedContentDropdown">
                                <a className="dropdown-item" href="#">
                                    Profile
                            </a>
                                <a className="dropdown-item" href="#">
                                    Sign Out
                            </a>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    };
}

export default Navbar;
