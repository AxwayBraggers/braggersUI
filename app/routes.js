import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import AppRoot from './pages/appRoot';
import IndexPage from './pages/index/index';
import AboutPage from './pages/about';
import ForumPage from './pages/forum';
import NoMatch from './pages/noMatch';

import ViewForumPage from './pages/forum/view';

class AppRoutes extends Component {
    static propTypes = {
        state: PropTypes.object
    };

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Route path="/" component={AppRoot}>
                    <IndexRoute component={IndexPage} />
                    <Route path="about" component={AboutPage} />
                    <Route path="forum" component={ForumPage} />
                    <Route path="forum/:id/:title" component={ViewForumPage} />
                    <Route path="*" component={NoMatch} />
                </Route>
            </Router>
        );
    }
}

export default AppRoutes;
