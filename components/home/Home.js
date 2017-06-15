import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Home extends Component {

    changeRoute = (event) => {
        browserHistory.push('/intro');
    }

    render() {
        return (
            <div>
                <div className="title-container">
                    <div className="title-text slide-title-default animated fadeIn"><span>TDD </span>
                        <div className="title-subtext"> Test Driven Development</div>
                    </div>
                    <i className="fa fa-angle-right arrow-right" onClick={this.changeRoute}></i>
                </div>
            </div>
        );
    }
}

export default Home;