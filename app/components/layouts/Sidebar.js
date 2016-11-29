import React, { Component, PropTypes } from 'react';
import Configuration from '../Configuration';

//Widgets
import UserMenu from '../widgets/UserMenu';
import ActiveUsers from '../widgets/ActiveUsers';
import Settings from '../widgets/Settings';

class Sidebar extends Component {

    constructor() {
        super();
    };

    static propTypes = {
        theme: PropTypes.object,
    };

    static defaultProps = {
        theme: Configuration.themeSettings,
    };


    componentWillMount() {
        this.state = {
            theme: this.props.theme,
        };
    };

    render() {
        return (
            <aside id="sidebar" className="hidden-xs col-sm-12 col-md-3">
                <UserMenu />
                <ActiveUsers />
                <Settings/>
            </aside >
        );
    };
}

export default Sidebar;
