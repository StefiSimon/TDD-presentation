import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Last from './Last';
import Repeat from './Repeat';

class Steps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        }
    }

    nextSection = () => {
        if (this.state.step === 1) {
            ReactDOM.render(
                <Second/>,
                document.getElementById('second')
            );
            this.setState({
                step: 2,
            });
        } else if (this.state.step === 2) {
            ReactDOM.render(
                <Third/>,
                document.getElementById('third')
            );
            this.setState({
                step: 3,
            });
        } else if (this.state.step === 3) {
            ReactDOM.render(
                <Fourth/>,
                document.getElementById('fourth')
            );
            this.setState({
                step: 4,
            });
        } else if (this.state.step === 4) {
            ReactDOM.render(
                <Last/>,
                document.getElementById('last')
            );
            this.setState({
                step: 5,
            });
        } else if (this.state.step === 5) {
            ReactDOM.render(
                <Repeat/>,
                document.getElementById('repeat')
            );
            this.setState({
                step: 6,
            });
        } else {
            browserHistory.push('/laws');
        }
    }

    render() {
        return (
            <div className="steps-centered">
                <div className="steps-container">
                    <div className="step-container animated fadeInRightBig">
                        <div><i className="fa fa-plus-square-o"></i></div>
                        <div className="step-title">Add a test</div>
                    </div>
                    <div className="step-container" id="second">
                    </div>
                    <div className="step-container" id="third">
                    </div>
                </div>
                <div className="steps-container">
                    <div className="step-container" id="fourth">
                    </div>
                    <div className="step-container" id="last">
                    </div>
                    <div className="step-container" id="repeat">
                    </div>
                </div>
                <i className="fa fa-angle-right arrow-right arrow-icon-steps" onClick={this.nextSection}></i>
            </div>
        )
    }
}

export default Steps;