import React, { PropTypes, Component } from 'react';
import Configuration from '../../components/Configuration';

//Layout components
import PageContent from './PageContent';


class IndexPage extends Component {


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
            <PageContent />
        );
    }
}

export default IndexPage;
