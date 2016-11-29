import React, { Component, PropTypes } from 'react';

import Navbar from '../navbar/Navbar';


class Header extends Component {

    constructor() {
        super();
    };

    render() {
        return (
            <header id="appHeader">
                <Navbar selectedItem={0} userName='Marin Vasilev'/>
            </header>
        );
    };
}

export default Header;
