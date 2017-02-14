import React, { Component, PropTypes } from 'react';
import Configuration from '../Configuration';

//Widgets
import LatestQuestions from '../widgets/LatestQuestions';

class SidebarRight extends Component {

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
            <aside id="sidebarRight" className="hidden-xs hidden-sm col-md-3">
                <LatestQuestions />
            </aside >
        );
    };
}

export default SidebarRight;
