import './App.css';
import React, {Component} from 'react';
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

    setWPM = (value) =>{
        this.setState({wpm: value});
    }

    setTimeTaken = (value) =>{
        this.setState({timeTaken: value});
    }

    render() {
        const {
            started,
            finished,
            wpm,
            timeTaken
        } = this.state;

        if (!started) {
            return (
                <Rules started={this.setStarted}/>
            )
        }

        if(finished){
            return(
                <End
                    wpm={wpm}
                    timeTaken={timeTaken}
                    finished={this.setFinished}/>
            )
        }

        return (
            <Game
                wpm={this.setWPM}
                timeTaken={this.setTimeTaken}
                finished={this.setFinished}
            />
        )
    }
}

export default App;
