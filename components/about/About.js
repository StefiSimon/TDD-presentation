import React, {Component} from 'react';
import { browserHistory } from 'react-router';

class More extends Component {

    changeRoute = () => {
        browserHistory.push('/intro');
    }

    render() {
        return (
            <div className="about-container">
                <div className="about-title slide-title-default">
                    How do we write tests? The...
                </div>
                <div className="about-bubble-container">
                    <div className="about-bubble animated fadeInRightBig">
                        <div className="about-bubble-circle"><span>R</span></div>
                        <div className="about-bubble-desc">Readable</div>
                    </div>
                    <div className="about-bubble animated fadeInRightBig">
                        <div className="about-bubble-circle"><span>I</span></div>
                        <div className="about-bubble-desc">Isolated & Integrated</div>
                    </div>
                    <div className="about-bubble animated fadeInRightBig">
                        <div className="about-bubble-circle"><span>T</span></div>
                        <div className="about-bubble-desc">Thorough</div>
                    </div>
                    <div className="about-bubble animated fadeInRightBig">
                        <div className="about-bubble-circle"><span>E</span></div>
                        <div className="about-bubble-desc">Explicit</div>
                    </div>
                </div>
                <div className="about-title slide-title-default">
                    way
                </div>
                <i className="fa fa-angle-right arrow-right" onClick={this.changeRoute}></i>
            </div>
        )
    }
}

export default More;