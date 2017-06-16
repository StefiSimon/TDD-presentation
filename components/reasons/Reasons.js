import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Reasons extends Component {

    changeRoute = () => {
        browserHistory.push('/examples');
    }

    render() {
        return (
            <div className="reasons-container">
                <div className="reasons-title slide-title-default"> So why do it
                    <i className="fa fa-question-circle-o"></i>
                </div>
                <div className="reasons-comment">- Especially in JS with plenty of frameworks and libraries -</div>
                <div className="reasons-column animated fadeInRightBig">
                    <div className="reason">
                        <i className="fa fa-circle-thin"> </i>Forces one to think ahead
                    </div>
                    <div className="reason">
                        <i className="fa fa-circle-thin"> </i>Makes debugging easier
                    </div>
                    <div className="reason">
                        <i className="fa fa-circle-thin"> </i>Makes coding challenging
                    </div>
                </div>
                <i className="fa fa-angle-right arrow-right" onClick={this.changeRoute}></i>
            </div>
        );
    }
}

export default Reasons;