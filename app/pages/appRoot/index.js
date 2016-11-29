import React, { PropTypes } from 'react';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import IndexPage from '../index/IndexPage';
import Configuration from '../../components/Configuration';
//Layout components
import Sidebar from '../../components/layouts/Sidebar';
import SidebarRight from '../../components/layouts/SidebarRight';

class AppRoot extends React.Component {
    constructor() {
        super();
    };
    static propTypes = {
        children: PropTypes.object,
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
            <section id="pageApp">
                <Header />
                <section id="homeContent" className={this.state.theme.bodyClass}>
                    <div className="container-fluid">
                        <div className="col-xs-12">
                            <Sidebar />
                            {this.props.children}
                            <SidebarRight />
                        </div>
                    </div>
                </section>

                <Footer />
            </section>
        );
    }
}

export default AppRoot;
