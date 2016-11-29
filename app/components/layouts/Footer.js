import React, { Component, PropTypes } from 'react';
import Configuration from '../Configuration';


class Footer extends Component {

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
            theme : this.props.theme,
        };
    };

    render() {
        return (
            <footer id="appFooter" className={this.state.theme.footerClass}>
                <div className="container-fluid">
                    <div className="col-xs-12">
                        <div className="col-xs-12 col-sm-3">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
}

export default Footer;
