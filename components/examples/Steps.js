import React from 'react';

const Steps = () => (
    <div className="logic-container animated fadeIn">
        <div className="half-row">
        <div className="logic-step">
            <div className="card-title">Purpose?</div>
            <div className="card-info">Send a request to Flickr API to get some photos</div>
            <div className="card-icon-row">
                <i className="fa fa-picture-o"></i>
                <i className="fa fa-file-image-o"></i>
            </div>
        </div>
        <div className="logic-step">
            <div className="card-title">How?</div>
            <div className="card-info"> Turn data into a single array of objects and display it</div>
            <div className="card-icon-row">
                <i className="fa fa-database"></i>
                <i className="fa fa-list-ul"></i>
            </div>
        </div>
        </div>
        <div className="half-row">
        <div className="logic-step">
            <div className="card-title">Tools?</div>
            <div className="card-info">Use Mocha as a testing framework combined with Chai (assertion library)</div>
            <div className="card-icon-row">
                <i className="fa fa-file-code-o"></i>
                <i className="fa fa-code"></i>
            </div>
        </div>
        <div className="logic-step">
            <div className="card-title">Structure?</div>
            <div className="card-info">One module: flickr-fetcher.js to fetch data and one test file: flickr-fetcher-spec.js</div>
            <div className="card-icon-row">
                <i className="fa fa-flickr"></i>
                <i className="fa fa-files-o"></i>
            </div>
        </div>
        </div>
    </div>
)

export default Steps;