import React, { Component, PropTypes } from 'react';

import axwayLogo from '../../images/logo.png';
import Configuration from '../Configuration';

class PostForm extends Component {

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
        userPicture: <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />,
        theme: Configuration.themeSettings,
    };

    componentWillMount() {
        this.state = {
            selectedItem: this.props.selectedItem,
            userName: this.props.userName,
            userPicture: this.props.userPicture,
            theme: this.props.theme,
        };
    };

    showPostForm = (e) => {
        let el = document.getElementById('newPost');
        el.className = 'col-xs-12 active';
    };

    hidePostForm = (e) => {
        e.preventDefault();
        let el = document.getElementById('newPost');
        el.className = 'col-xs-12';
    };

    render() {

        return (
            <article id="newPost" className="col-xs-12">
                <div className="card card-block">
                    <div className="card-text">
                        <div className="userAvatar col-xs-4 col-sm-2">
                            {this.state.userPicture}
                        </div>
                        <form className="col-xs-8 col-sm-10">
                            <h5>Write a new Article</h5>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Write new Post" onFocus={this.showPostForm} />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Post Content</label>
                                <textarea className="form-control"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-12">
                        <div className="float-sm-right buttonBar">
                            <a href="#" className="def-btn" onClick={this.hidePostForm}>Cancel Articele</a>
                            or
                            <a href="#" className="btn btn-success"><i className="material-icons">done</i> Submit</a>
                        </div>
                    </div>
                </div>

            </article>
        );
    };
}

export default PostForm;
