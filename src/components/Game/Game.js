import React, {Component} from 'react'

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            words: [],
            lastInput: '',
            time: 0,
            wpm: 0,
            completedWords: [],
        }
    }


     setText = () =>{
        const phrases = [
            'You were never one of us. You were nothing but a usurper. A false idol. My eyes have been opened. Let me help you to see, Slayer.',
            'Against all the evil that Hell can conjure, all the wickedness that mankind can produce, we will send unto them... only you. Rip and tear, until it is done.',
            'Gordon Freeman, in the flesh – or, rather, in the hazard suit. I took the liberty of relieving you of your weapons. Most of them were government property. As for the suit... I think you\'ve earned it.',
            'This is Mr. New Vegas, and I feel something magic in the air tonight, and I\'m not just talking about the gamma radiation.',
            'C is for Charisma, it\'s why people think I\'m great! I make my friends all laugh and smile, and never want to hate!',
        ]
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const words = phrase.split(" ");

        this.setState({
            text: phrase,
            words: words,
            completedWords: [],
            time: 0,
            startTime: Date.now()
        });
    }

    // Detects if word inputted
    handleChange = e =>{
        const {words, completedWords} = this.state;
        const inputValue = e.target.value;
        const lastLetter = inputValue[inputValue.length - 1];

        const currentWord = words[0];
        if(lastLetter === '' || lastLetter === '.'){
            if(inputValue === currentWord){
                const newWords = words.slice(1);
                const newCompletedWords = [...completedWords, currentWord];

                this.setState({
                    words: newWords,
                    completedWords: newCompletedWords
                });
            }
        }
    }

    componentDidMount(){
        this.setText();
    }

    render() {
        return (
            <div className='container'>
                <p className="text">{this.state.text}</p>
                <input type="text" onChange={this.handleChange} autoFocus={true}/>
            </div>
        )
    }
}

export default Game;