import React, { Component } from 'react';
import Home from './home/Home';

class App extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;