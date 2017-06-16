import React from 'react';

const secondStepHTML = () => (
    <div className="animated fadeInRightBig step-box">
        <div><i className="fa fa-caret-square-o-right"></i></div>
        <div className="step-title">Run the test</div>
        <div className="step-desc">the new test does not pass without requiring new code</div>
        <div className="step-desc">The new test should fail for the expected reason</div>
    </div>
);

export default secondStepHTML;