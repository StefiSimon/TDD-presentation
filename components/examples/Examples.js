import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';
import Steps from './Steps';
import { browserHistory } from 'react-router';

class Examples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        }
    }

    renderNextItem = () => {
        if (this.state.step === 1) {
            ReactDOM.render(
                <Question/>,
                document.getElementById('question')
            );
            this.setState({
                step: 2,
            });
        } else if (this.state.step === 2) {
            ReactDOM.render(
                <Steps/>,
                document.getElementById('steps')
            );
            this.setState({
                step: 3,
            });
        } else {
            browserHistory.push('/demo');
        }
    }

    render() {
        return (
            <div className="examples-container">
                <div className="examples-title slide-title-default animated fadeInRightBig">
                    Now let's see a small & simple example!
                </div>
                <div id="question"></div>
                <div id="steps"></div>
                <i className="fa fa-angle-right arrow-right arrow-example-icon" onClick={this.renderNextItem}></i>

            </div>
        )
    }
}

export default Examples;