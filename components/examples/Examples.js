import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';
import Steps from './Steps';

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
        }
    }

    render() {
        return (
            <div className="examples-container">
                <div className="examples-title slide-title-default animated fadeInRightBig">
                    Now let's see a small & simple example!
                </div>
                <i className="fa fa-angle-right arrow-right" onClick={this.renderNextItem}></i>
                <div id="question"></div>
                <div id="steps"></div>
            </div>
        )
    }
}

export default Examples;