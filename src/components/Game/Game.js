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


    // Phrases to be used in game
    /*

     */

    setText = () => {
        const phrases = [
            {quote: 'You were never one of us. You were nothing but a usurper. A false idol. My eyes have been opened. Let me help you to see, Slayer.', location: 'Doom Eternal'},
            {quote: 'Against all the evil that Hell can conjure, all the wickedness that mankind can produce, we will send unto them, only you. Rip and tear, until it is done.', location: 'Doom Eternal'},
            {quote:  'Gordon Freeman, in the flesh - or, rather, in the hazard suit. I took the liberty of relieving you of your weapons. Most of them were government property. As for the suit... I think you\'ve earned it.', location: 'Half-Life'},
            {quote: 'This is Mr. New Vegas, and I feel something magic in the air tonight, and I\'m not just talking about the gamma radiation.', location: 'Fallout: New Vegas'},
            {quote: 'C is for Charisma, it\'s why people think I\'m great! I make my friends all laugh and smile, and never want to hate!', location: 'Fallout 3'},
            {quote: 'Do you know the biggest lesson I learned from what you did? I discovered I have a sort of black-box quick-save feature. In the event of a catastrophic failure, the last two minutes of my life are preserved for analysis. I was able – well, forced, really – to relive you killing me. Again and again. Forever. You know, if you had done that to someone else, they might devote their existence to exactly revenge.', location: 'Portal 2'},
            {quote: 'It\'s time to kick ass and chew bubble gum... and I\'m all outta gum.', location: 'Duke Nukem 3D'},
            {quote: 'Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain\'t nothing fair.', location: 'Red Dead Redemption'},
            {quote: 'It\'s dangerous to go alone, take this!', location: 'The Legend of Zelda'},
            {quote: 'Operator! Give me the number for 911!', location: 'The Simpsons'},
            {quote: 'Here\'s to alcohol: the cause of, and solution to, all of life\'s problems.', location: 'The Simpsons'},
            {quote: 'Being a liar does seem pretty rough. I\'ll try to stop.', location: 'Spy x Family'},
            {quote: 'Right and wrong are not what separate us and our enemies. It\'s our different standpoints, our perspectives that separate us. Both sides blame one another. There\'s no good or bad side. Just two sides holding different views.', location: 'Final Fantasy VII'},
            {quote: 'The cake is a lie.', location: 'Portal'},
            {quote: 'If at first you don\'t succeed... give up.', location: 'The Simpsons'},
            {quote: 'Beets. Bears. Battlestar Galactica.', location: 'The Office(U.S.)'},

        ]

        let quote
        if(this.props.customVal.name !== ''){
            quote = this.props.customVal.name
            this.props.setQuoteLocation(this.props.customVal.origin);
        }
        else{
            const phrase = phrases[Math.floor(Math.random() * phrases.length)];
            this.props.setQuoteLocation(phrase.location);
            quote = phrase.quote;
        }
        const words = quote.split(" ");

        this.setState({
            text: quote,
            words: words,
            completedWords: [],
            time: 0,
            charactersTypes: 0
        });
    }


    // Detects if word inputted
    handleChange = e => {
        const {words, completedWords, time, wpm} = this.state;
        const inputValue = e.target.value;
        const lastLetter = inputValue[inputValue.length - 1];

        const currentWord = words[0];
        console.log(`currentWord is ${currentWord}`);


        if (lastLetter === ' ') {
            console.log('First if statement passed!')
            let newCompletedWords = []

            console.log(`currentWord is ${currentWord}`);
            console.log(`inputValue is ${inputValue}`);

            if (inputValue.trim() === currentWord) {
                if (words.length === 1) {
                    console.log('finished!');
                    this.props.setWPM(wpm);
                    this.props.setTimeTaken(time);
                    this.props.setFinished(true);
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

            else{
                this.setState({
                    inputValue: inputValue,
                })
            }

        } else {
            this.setState({
                inputValue: inputValue,
            });

            // Last word left, just finish the game(Case only used when the last word has no punctuation)
            if(words.length === 1 && inputValue.trim() === currentWord){
                this.props.setWPM(wpm);
                this.props.setTimeTaken(time);
                this.props.setFinished(true);
            }
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
                    <progress value={completedWords.length / text.split(' ').length} variant="SOME_NAME"/>
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