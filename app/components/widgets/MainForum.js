import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

import Request from '../../utils/Request';
import Settings from '../../utils/Settings';

class MainForum extends Component {

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

    postItems = () => {
        return [];
    };

    componentWillMount() {
        this.state = {
            selectedItem: this.props.selectedItem,
            userName: this.props.userName,
            userPicture: this.props.userPicture,
            theme: this.props.theme,
            postItems: this.postItems(),
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
                    userData[index] = user
                });
                this.setState({
                    postItems: userData,
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
            <div className="col-xs-12">
                {this.state.postItems.map((item, index) => {
                    return <div className="card card-block">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text" dangerouslySetInnerHTML={{__html: item.body_markdown}} />
                        <a href={item.link} className="card-link text-success"><i className="material-icons">person_pin_circle</i> {item.owner.display_name}</a>
                        <a href={item.link} className="card-link"><i className="material-icons">label</i> {item.tags.map((tag) => {
                            return ' ' + tag + ' ';
                        })}</a>
                        </div>
                })}
            </div>
        );
    };
}

export default MainForum;
