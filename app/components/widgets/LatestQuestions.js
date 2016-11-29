import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

class LatestQuestions extends Component {

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
        selectedItem: 0,
        userName: 'unknown',
        userPicture: <i className="material-icons">account_circle</i>,
        theme: Configuration.themeSettings,
    };

    questionItems = () => {
        return [
            { title: 'How to load JSON data into JavaScript from separate php script', url: '/article/1' },
            { title: `HTML5 audio tag doesn't play some audio`, url: '/article/2' },
            { title: `Unable to print array of arrays correctly`, url: '/article/3' },
            { title: `quotation marks within quotation marks syntax [duplicate]`, url: '/article/4' },
            { title: `ajax render, execute the input tag and output tag of parent window from popup window JSF`, url: '/article/5' },
        ];
    };

    questionTags = () => {
        return [
            { title: 'JavaScript' },
            { title: 'Appcelerator Arrow' },
            { title: 'node.js' },
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
        if (e.target.nodeName === 'SPAN') {
            target = e.target.parentElement;
        }
        this.setState({
            selectedItem: target.dataset.key
        });
    }

    _renderTags = () => {
        return this.questionTags().map((item, index) => {
            return <span className="tag tag-pill tag-default">{item.title}</span>
        })
    }

    render() {

        return (
            <ul className="nav latestQuestions">
                <li className="heading">Latest Questions</li>
                {this.questionItems().map((item, index) => {
                    return <li key={index}>
                        <a className="nav-link" href="{item.link}" data-key={index} onClick={this.handleClick}>
                            {item.title}
                        </a>
                        <div>
                            {this._renderTags()}
                        </div>
                    </li>
                })}
            </ul>
        );
    };
}

export default LatestQuestions;
