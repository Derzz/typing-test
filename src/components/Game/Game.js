import React, {Component} from 'react'
import Timer from '../Timer/Timer'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            words: [],
            lastInput: '',
            time: 0,
            wpm: 0,
            completedWords: [],
            inputValue: '',
        }
    }


    // TODO Add Actual Phrases Here
    /*
                'You were never one of us. You were nothing but a usurper. A false idol. My eyes have been opened. Let me help you to see, Slayer.',
            'Against all the evil that Hell can conjure, all the wickedness that mankind can produce, we will send unto them, only you. Rip and tear, until it is done.',
            'Gordon Freeman, in the flesh – or, rather, in the hazard suit. I took the liberty of relieving you of your weapons. Most of them were government property. As for the suit... I think you\'ve earned it.',
            'This is Mr. New Vegas, and I feel something magic in the air tonight, and I\'m not just talking about the gamma radiation.',
            'C is for Charisma, it\'s why people think I\'m great! I make my friends all laugh and smile, and never want to hate!',
     */

    setText = () => {
        const phrases = [
            'You were never one of us. You were nothing but a usurper. A false idol. My eyes have been opened. Let me help you to see, Slayer.'
        ]
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const words = phrase.split(" ");

        this.setState({
            text: phrase,
            words: words,
            completedWords: [],
            time: 0,
            charactersTypes: 0
        });
    }


    // Detects if word inputted
    handleChange = e => {
        const {words, completedWords, time} = this.state;
        const inputValue = e.target.value;
        const lastLetter = inputValue[inputValue.length - 1];

        const currentWord = words[0];

        if (lastLetter === ' ' || lastLetter === '.') {
            console.log('First if statement passed!')
            let newCompletedWords = []

            if (inputValue.trim() === currentWord) {
                if (words.length === 1) {
                    console.log('finished!');
                    this.props.finished(true);
                } else {
                    console.log('Second if statement passed!')
                    const newWords = words.slice(1);
                    console.log(newWords);
                    newCompletedWords = [...completedWords, currentWord];
                    console.log(newCompletedWords);

                    this.setState({
                        words: newWords,
                        completedWords: newCompletedWords,
                        inputValue: ''
                    });


                }

                // Add WPM on character length of word

                let charLength = 0;

                for(const word of newCompletedWords){
                    console.log(`Word is ${word}, time is ${time}`);
                    charLength = charLength + word.length;
                    console.log(`CharLength is ${charLength}`);
                }

                console.log(`CharLength is ${charLength}, time is ${time}`);

                let wpmTemp = (charLength/5)/(time/60);

                console.log(`WPM(precise) is ${wpmTemp}`);

                wpmTemp = Math.ceil(wpmTemp);

                console.log(`WPM is ${wpmTemp}`)

                this.setState({
                    wpm: wpmTemp,
                })

            }
        } else {
            this.setState({
                inputValue: inputValue,
            });
        }
    }

    // Used when Game is called to show what phrase is being activated
    componentDidMount() {
        this.setText();
    }



    setTime = (elapsed) => {
        this.setState({time: elapsed})
    }

    render() {
        const {
            text,
            completedWords,
            inputValue,
            time,
            wpm,
        } = this.state;

        return (
            <div>
                <div className={'score'}>
                    <p>
                    <Timer time={time}
                    setTime = {this.setTime}
                    /> <br/>
                        WPM: {wpm}</p>
                </div>

            <div className='container'>
                <p className={'text'}>
                    {text.split(' ').map((word, wordIndex) => {
                        let highlight = false;
                        let currentWord = false;


                        if (completedWords.length > wordIndex) {
                            highlight = true;
                        }

                        if (completedWords.length === wordIndex) {
                            currentWord = true;
                        }

                        return (
                            <span
                                className={`word 
                                ${highlight && 'green'} 
                                ${currentWord && "underline"}`}
                                key={wordIndex}
                            >
                                {word.split('').map((letter, letterIndex) => {
                                    const needsToBeHighlighted = letterIndex < inputValue.length;
                                    const isCurrentWord = wordIndex === completedWords.length;
                                    const isWronglyTyped = letter !== inputValue[letterIndex];

                                    return(
                                        <span className={`letter ${
                                            isCurrentWord && needsToBeHighlighted ? isWronglyTyped ? 'red' : 'green' : ''}`}
                                          key={letterIndex}>

                                        {letter}
                                        </span>
                                    );
                                })}
                            </span>
                        )
                    })}
                </p>

                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    autoFocus={true}/>
            </div>
            </div>
        )
    }
}

export default Game;