import React, { PropTypes, Component } from 'react';
import Configuration from '../../components/Configuration';

class ViewForumPage extends Component {


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
            <div className="col-sm-12 col-md-6">
                <h1>Here resides our forum /{this.props.params.id}/{this.props.params.title}</h1>
            </div>
        );
    }
}

export default ViewForumPage;
