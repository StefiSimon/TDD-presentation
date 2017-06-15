import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

const secondStepHTML = (
    <div className="animated fadeInRightBig">
        <div><i className="fa fa-caret-square-o-right"></i></div>
        <div className="step-title">Run the test</div>
        <div className="step-desc">the new test does not pass without requiring new code</div>
        <div className="step-desc">The new test should fail for the expected reason</div>
    </div>
);

const thirdStepHTML = (
    <div className="animated fadeInRightBig">
        <div><i className="fa fa-pencil-square-o"></i></div>
        <div className="step-title">Write the code</div>
        <div className="step-desc">Write the code that causes the code to pass</div>
        <div className="step-desc">The code may not be perfect, but the only purpose is to pass the test</div>
    </div>
);

const fourthStepHTML = (
    <div className="animated fadeInRightBig">
        <div><i className="fa fa-caret-square-o-right"></i></div>
        <div className="step-title">Run tests again</div>
        <div className="step-desc">If all tests pass, the new code meets the requirements</div>
        <div className="step-desc">If not, new code must be adjusted until tests pass</div>
    </div>
);

const lastStepHTML = (
    <div className="animated fadeInRightBig">
        <div><i className="fa fa-wrench"></i></div>
        <div className="step-title">Refactor code</div>
        <div className="step-desc">The code base must be cleaned up regularly during TDD</div>
        <div className="step-desc">Continually rerunning test cases to make sure everything works</div>
    </div>
);

const repeatHTML = (
    <div className="animated fadeInRightBig">
        <div><i className="fa fa-repeat"></i></div>
        <div className="step-title">REPEAT</div>
        <div className="step-desc">The size of the steps must be small, with 1-10 edits between each test run</div>
        <div className="step-desc">Receiving the expected test results boosts confidence and increases productivity
        </div>
        <div className="step-desc">Reduced debugging effort</div>
        <div className="step-desc">Self-documenting tests – Small test cases are easier to read and to understand</div>
    </div>
);

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
                secondStepHTML,
                document.getElementById('second')
            );
            this.setState({
                step: 2,
            });
        } else if (this.state.step === 2) {
            ReactDOM.render(
                thirdStepHTML,
                document.getElementById('third')
            );
            this.setState({
                step: 3,
            });
        } else if (this.state.step === 3) {
            ReactDOM.render(
                fourthStepHTML,
                document.getElementById('fourth')
            );
            this.setState({
                step: 4,
            });
        } else if (this.state.step === 4) {
            ReactDOM.render(
                lastStepHTML,
                document.getElementById('last')
            );
            this.setState({
                step: 5,
            });
        } else if (this.state.step === 5) {
            ReactDOM.render(
                repeatHTML,
                document.getElementById('repeat')
            );
            this.setState({
                step: 6,
            });
        } else {
            browserHistory.push('/');
        }
    }

    render() {
        return (
            <div className="steps-centered">
                <div className="steps-container">
                    <div className="step-container animated fadeInRightBig">
                        <div><i className="fa fa-plus-square-o"></i></div>
                        <div className="step-title">Add a test</div>
                        <div className="step-desc">Understanding of pecifications and requirements</div>
                        <div className="step-desc">Use cases/user stories</div>
                        <div className="step-desc">Focus on the requirements before writing the code</div>
                    </div>
                    <div className="step-container" id="second">
                    </div>
                    <div className="step-container" id="third">
                    </div>
                    <div className="step-container" id="fourth">
                    </div>
                    <div className="step-container" id="last">
                    </div>
                </div>
                <div className="step-container" id="repeat">
                </div>
                <i className="fa fa-angle-right arrow-right arrow-icon-steps" onClick={this.nextSection}></i>
            </div>
        )
    }
}

export default Steps;