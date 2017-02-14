import React, { Component, PropTypes } from 'react';

import Navbar from '../navbar/Navbar';


class Header extends Component {

    constructor() {
        super();
    };


    componentWillMount() {
        this.state = {
            userData: new Object(),
        };
    };

    render() {
        return (
            <header id="appHeader">
                <Navbar selectedItem={0} />
            </header>
        );
    };
}

export default Header;
