import './App.css';
import React, {Component} from 'react';
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';
import End from './components/End/End'
import Custom from './components/Custom/Custom'

// TODO Allow user to add their own phrases


class App extends Component {
    state = {
        started: false,
        finished: false,
        wpm: 0,
        quoteLocation: '',
        timeTaken: 0,
        customCheck: false,
        customVal: {name: '', origin: ''}
    };

    // eslint-disable-next-line no-useless-constructor
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

    setCustomCheck = (value) =>{
        this.setState({customCheck: value});
    }

    setCustomVal = (nameVal, originVal) =>{
        this.setState({
            customVal: {
                name: nameVal,
                origin: originVal
            }
        });
    }

    render() {
        const {
            started,
            finished,
            wpm,
            timeTaken,
            customCheck,
            customVal
        } = this.state;

        const propPack = {
            setStarted: this.setStarted,
            setFinished: this.setFinished,
            setWPM: this.setWPM,
            setTimeTaken: this.setTimeTaken,
            setQuoteLocation: this.setQuoteLocation,
            setCustomCheck: this.setCustomCheck,
            setCustomVal: this.setCustomVal,
            customVal: customVal,
            wpm: wpm,
            quoteLocation: this.state.quoteLocation,
            timeTaken: timeTaken,
        };


        if(customCheck){
            return(
                <Custom
                    {...propPack}
                />
            )
        }

        if (!started) {
            return (
                <Rules
                    {...propPack}
                />
            )
        }

        if(finished){
            return(
                <End
                    {...propPack}
                />
            )
        }

        return (
            <Game
                {...propPack}
            />
        )
    }
}

export default App;
