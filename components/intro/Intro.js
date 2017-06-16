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
                        <img src="http://screenster.io/wp-content/uploads/2016/12/TDD-diagram_02.png"/>
                    </div>
                    <div className="intro-column">
                        <div className="introduction-title slide-title-default">
                            What is TDD?
                        </div>
                        <div className="introduction-separator">♦</div>
                        <div className="introduction-info introduction-info-main animated fadeIn">
                            Software development process that relies on the repetition of a cycle:
                        </div>
                        <div className="introduction-info animated fadeIn">
                            <i className="fa fa-chevron-circle-right"></i>
                            Developer writes an (initially failing) automated test case that defines a desired
                            functionality
                        </div>
                        <div className="introduction-info animated fadeIn">
                            <i className="fa fa-chevron-circle-right"></i>
                            Produces minimum amount of code that enables that test to pass
                        </div>
                        <div className="introduction-info animated fadeIn">
                            <i className="fa fa-chevron-circle-right"></i>
                            Refactors the code to traditional standards
                        </div>
                    </div>
                </div>
                <i className="fa fa-angle-right arrow-right" onClick={this.changeRoute}></i>
            </div>
        );
    }
}

export default Intro;