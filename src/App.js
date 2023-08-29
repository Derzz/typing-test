import './App.css';
import React, {Component} from 'react';
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';
import End from './components/End/End'

// TODO Add feature to store objects of what the location of the phrases came from
// TODO Allow user to add their own phrases


class App extends Component {
    state = {
        started: false,
        finished: false,
        wpm: 0,
        quoteLocation: '',
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

    setQuoteLocation = (value) =>{
        this.setState({quoteLocation: value});
    }

    render() {
        const {
            started,
            finished,
            wpm,
            timeTaken,
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
                    finished={this.setFinished}
                    quoteLocation={this.state.quoteLocation}/>
            )
        }

        return (
            <Game
                wpm={this.setWPM}
                timeTaken={this.setTimeTaken}
                finished={this.setFinished}
                quoteLocation={this.setQuoteLocation}
            />
        )
    }
}

export default App;
