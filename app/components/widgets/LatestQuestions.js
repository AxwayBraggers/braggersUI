import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

import Request from '../../utils/Request';
import Settings from '../../utils/Settings';

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
        return [];
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
            userItems: this.questionItems(),
        };
    };

    componentDidMount() {
        //Fetch user data
        let req = new Request();
        let settings = new Settings();
        req.get(settings.baseUrl + "/api/question/", (response) => {
            var body = response;
            if (typeof body === 'string') {
                body = JSON.parse(body);
            }
            if (body.questions.length > 0) {
                var userData = new Array();
                body.questions.map((user, index) => {
                    userData[index] = {
                        title: user.title,
                        link: user.link
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
        if (e.target.nodeName === 'SPAN') {
            target = e.target.parentElement;
        }
        this.setState({
            selectedItem: target.dataset.key
        });
    }

    _renderTags = () => {
        return this.questionTags().map((item, index) => {
            return <span key={index} className="tag tag-pill tag-default">{item.title}</span>
        })
    }

    render() {

        return (
            <ul className="nav latestQuestions">
                <li className="heading">Latest Questions</li>
                {this.state.userItems.map((item, index) => {
                    return <li key={index}>
                        <a className="nav-link" data-key={index} href={item.link} onClick={this.handleClick}>
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
