import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Laws extends Component {

    changeRoute = () => {
        browserHistory.push('/reasons');
    }

    render() {
        return (
            <div className="laws-container">
                <div className="slide-title-default laws-title">
                    Three laws of TDD
                </div>
                <img src="https://cdn2.iconfinder.com/data/icons/business-finance-line-1/24/Auction-Hammer-128.png" />
                <div className="laws-row animated fadeInRightBig" >
                    <div className="law">
                        <div className="law-number">1st</div>
                        <div className="law-content">You are not allowed to write any production code unless it is to make a failing test pass
                        </div>
                    </div>
                    <div className="law-separator"></div>
                    <div className="law">
                        <div className="law-number">2nd</div>
                        <div className="law-content">You are not allowed to write any more of a unit test that is sufficient to fail
                        </div>
                    </div>
                    <div className="law-separator"></div>
                    <div className="law">
                        <div className="law-number">3rd</div>
                        <div className="law-content">You are not allowed to write more production code that is sufficient to pass the one failing test
                        </div>
                    </div>
                </div>
                <i className="fa fa-angle-right arrow-right" onClick={this.changeRoute}></i>
            </div>
        );
    }
}

export default Laws;