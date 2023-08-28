import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import state from 'react';
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';
import End from './components/End/End'



class App extends Component {
    state = {
        started: false,
        finished: false,
        wpm: 0,
        timeTaken: 0
    };

    constructor(props) {
        super(props);
    };

    setStarted= (value) =>{
        this.setState({started: value});
    }

    setFinished = (value) =>{
        this.setState({finished: value});
    }

    render() {
        const {
            started,
            finished
        } = this.state;

        if (!started) {
            return (
                <Rules started={this.setStarted}/>
            )
        }

        if(finished){
            return(
                <End finished={this.setFinished}/>
            )
        }

        return (
            <Game finished={this.setFinished}/>
        )
    }
}

export default App;
