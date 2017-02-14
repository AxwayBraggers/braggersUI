import React from 'react';
import notfound_image from './404.jpg';

class NoMatch extends React.Component {
    render() {
        return (
            <div id="notFoundPage" className="col-sm-12 col-md-6">
                <img src={notfound_image} />
            </div>
        );
    }
}

export default NoMatch;
