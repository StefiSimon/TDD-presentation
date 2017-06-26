import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Intro extends Component {

    changeRoute = () => {
        browserHistory.push('/related');
    }

    render() {
        return (
            <div className="introduction-container-block">
                <div className="introduction-container" id="intro">
                    <div className="intro-column animated fadeIn">
                        <img src="http://screenster.io/wp-content/uploads/2016/12/TDD-diagram_02.png" width="500"/>
                    </div>
                    <div className="intro-column">
                        <div className="introduction-title slide-title-default">
                            What is TDD?
                        </div>
                        <div className="introduction-separator">♦</div>
                        <div className="introduction-info introduction-info-main animated fadeIn">
                            Process that relies on the repetition of a cycle:
                        </div>
                        <div className="introduction-info animated fadeIn">
                            <i className="fa fa-chevron-circle-right"></i>
                            RED - Initially failing test
                        </div>
                        <div className="introduction-info animated fadeIn">
                            <i className="fa fa-chevron-circle-right"></i>
                            GREEN - Write code to make the test pass
                        </div>
                        <div className="introduction-info animated fadeIn">
                            <i className="fa fa-chevron-circle-right"></i>
                            REFACTORING - Refactoring code
                        </div>
                    </div>
                </div>
                <i className="fa fa-angle-right arrow-right intro-arrow" onClick={this.changeRoute}></i>
            </div>
        );
    }
}

export default Intro;