import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Related extends Component {

    changeRoute = () => {
        browserHistory.push('/steps');
    }

    render() {
        return (
            <div className="related-container">
                <div className="related-title slide-title-default">
                    What about BDD?
                </div>
                <div className="related-separator introduction-separator">♦</div>
                <div className="related-example animated fadeInRightBig">
                    <div className="related-example-inner">
                        <div className="related-example-title slide-title-default">
                            Related concept
                        </div>
                        <div className="related-example-info">
                            A variation of TDD where the tests look like
                        </div>
                        <div className="related-example-code">
                            Describe[thing].it should[something];
                        </div>
                        <div className="related-example-info">
                            where [thing] can be a class, module, method.
                            It’s focusing on the syntax in order to achieve a more readable structure
                        </div>
                    </div>
                </div>
                <i className="fa fa-angle-right arrow-right" onClick={this.changeRoute}></i>
            </div>
        )
    }
}

export default Related;