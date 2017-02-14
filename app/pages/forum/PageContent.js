import React, { Component, PropTypes } from 'react';
import Configuration from '../../components/Configuration';

//Layout elements
import PostForm from '../../components/widgets/PostForm';
import MainForum from '../../components/widgets/MainForum';

class PageContent extends Component {

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
            <div className="col-sm-12 col-md-6">
                <MainForum />
            </div>
        );
    };
}

export default PageContent;
