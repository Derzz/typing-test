import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import state from 'react';
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';



class App extends Component {
    state = {
        started: false,
        finished: false
    };

    constructor(props) {
        super(props);
    };

    setStarted= (value) =>{
        this.setState({started: value});
    }
    render() {
        const {
            started
        } = this.state;

        if (!started) {
            return (
                <Rules started={this.setStarted}/>
            )
        }

        return (
            <Game/>
        )
    }
}

export default App;
