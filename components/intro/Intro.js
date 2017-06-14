import React, {Component} from 'react';

class Intro extends Component {

    render() {
        return (
            <div className="introduction-container animated fadeIn" id="intro">
                <div className="intro-column">
                    <img src="http://screenster.io/wp-content/uploads/2016/12/TDD-diagram_02.png"/>
                </div>
                <div className="intro-column animated fadeIn">
                    <div className="introduction-title">
                        What is TDD?
                    </div>
                    <div className="introduction-separator">♦</div>
                    <div className="introduction-info introduction-info-main">
                        Software development process that relies on the repetition of a cycle:
                    </div>
                    <div className="introduction-info">
                        <i className="fa fa-chevron-circle-right"></i>
                        Developer writes an (initially failing) automated test case that defines a desired functionality
                    </div>
                    <div className="introduction-info">
                        <i className="fa fa-chevron-circle-right"></i>
                        Produces minimum amount of code that enables that test to pass
                    </div>
                    <div className="introduction-info">
                        <i className="fa fa-chevron-circle-right"></i>
                        Refactors the code to traditional standards
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;