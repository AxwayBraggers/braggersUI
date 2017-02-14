import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

class Preloader extends Component {

    constructor() {
        super();
    };

    static propTypes = {
        content: PropTypes.string,
        theme: PropTypes.object,
        placement: PropTypes.number,
        dataObject: PropTypes.any,
    };

    static defaultProps = {
        content: 'Loading',
        theme: Configuration.themeSettings,
        placement: 0, //0 - sidebar, 1 - main content
        dataObject: null,
    };

    componentWillMount() {
        this.state = {
            content: this.props.content,
            theme: this.props.theme,
            placement: this.props.placement, //0 - sidebar, 1 - main content
            dataObject: this.props.dataObject
        };
    };

    _stopPreloader = () => {
        const nodeId = this._rootNodeID;
        let element = document.getElementById('preloader-' + { nodeId });
        element.style = 'display: none;';
        console.log('preloader-' + { nodeId }, 'is now hidden');
    }

    render() {
        //If data is set - hide the preloader
        if (!this.props.dataObject) {
            return (
                <div id="preloader-{nodeId}" className="preloader alert alert-warning alert-border" role="alert">
                    <i className="material-icons">cached</i>
                    {this.state.content}
                </div>
            );
        } else {
            return (
                <span style={{display: 'none'}}></span>
            );
        }
    };
}

export default Preloader;
