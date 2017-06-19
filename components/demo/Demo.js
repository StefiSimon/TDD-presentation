import React, {Component} from 'react';
import { browserHistory } from 'react-router';

class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepNo: 1,
            title: 'Our first simple test: see if I can load the module',
            subtitle: 'by checking if it is undefined',
            firstImgSrc: '../../static/img/first-step-2.png'
        };
    }

    changeStep = () => {
        if (this.state.stepNo === 1) {
            this.setState({
                stepNo: 2,
                title: 'Result ? Test passed !',
                subtitle: 'we do not have a failing test, so we have to write another one',
                firstImgSrc: '../static/img/first-step-3.png'
            });
        } else if (this.state.stepNo === 2) {
            this.setState({
                stepNo: 3,
                title: 'Focus on our goal: getting data from the API',
                subtitle: 'P.S. : Use equal() when comparing booleans, numbers, strings and eql() when comparing arrays of objects',
                firstImgSrc: '../static/img/second-step-1.png'
            });
        } else if (this.state.stepNo === 3) {
            this.setState({
                stepNo: 4,
                title: 'Result ? Test failed !',
                subtitle: 'obviously. we have not created the function yet, so we can write some code now!',
                firstImgSrc: '../static/img/second-step-2.png'
            });
        } else if (this.state.stepNo === 4) {
            this.setState({
                stepNo: 5,
                title: 'How can we quickly make the test pass?',
                subtitle: 'Answer: Return the exact expected result!',
                firstImgSrc: '../static/img/third-step-1.png'
            });
        } else if (this.state.stepNo === 5) {
            this.setState({
                stepNo: 6,
                title: 'Result? Test passed (result was basically hardcoded)',
                subtitle: 'Now we can move on to refactoring the code',
                firstImgSrc : '../static/img/third-step-2.png'
            });
        } else if (this.state.stepNo === 6) {
            this.setState({
                stepNo: 7,
                title: 'We change the function into one that works for all cases',
                subtitle: 'If we run the tests now...they still pass, we can refactor the code even more!',
                firstImgSrc : '../static/img/fourth-step.png'
            });
        } else if (this.state.stepNo === 7) {
            this.setState({
                stepNo: 8,
                title: 'Does our function look ok with all those pluses? Not really',
                subtitle: 'We can put all the string parts into an array and glue them together with join() method',
                firstImgSrc : '../static/img/fifth-step.png'
            });
        } else if (this.state.stepNo === 8) {
            this.setState({
                stepNo: 9,
                title: 'We can write more tests now that the old ones are passing',
                subtitle: 'I want a function that takes the object and returns only the important information',
                firstImgSrc : '../static/img/six-step-1.png'
            });
        } else if (this.state.stepNo === 9) {
            this.setState({
                stepNo: 10,
                title: 'Running the tests? Fail.',
                subtitle: 'The function does not exist yet',
                firstImgSrc : '../static/img/six-step-2.png'
            });
        } else if (this.state.stepNo === 10) {
            this.setState({
                stepNo: 11,
                title: 'Writing the minimum amound of code again',
                subtitle: 'Obviously, we create the function and return the hardcoded answer',
                firstImgSrc : '../static/img/seven-step.png'
            });
        } else if (this.state.stepNo === 11) {
            this.setState({
                stepNo: 12,
                title: 'All tests pass now.',
                subtitle: 'Now we have to refactor our function',
                firstImgSrc : '../static/img/eight-step.png'
            });
        } else if (this.state.stepNo === 12) {
            this.setState({
                stepNo: 13,
                title: 'We refactor our function.',
                subtitle: 'We use for the url field the previous function',
                firstImgSrc: '../static/img/nine-step.png'

            });
        } else if (this.state.stepNo === 14) {
            browserHistory.push('/conclusion');
        }
    };

    render() {
        return (
            <div className="demo-container">
                <div className="slide-title-default demo-title-fixed">
                    Simple TDD demo
                </div>
                <div className="slide-title-default demo-title">
                    <span>{this.state.stepNo}.</span>
                    {this.state.title}
                </div>
                <div className="demo-subtitle">{this.state.subtitle}</div>
                <div className="demo-image animated fadeInRightBig">
                    <img src={this.state.firstImgSrc} />
                </div>
                <i className="arrow-right fa fa-angle-right demo-fa" onClick={this.changeStep}></i>
            </div>
        )
    }
}

export default Demo;