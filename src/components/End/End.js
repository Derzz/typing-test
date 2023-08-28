import React from 'react'

const End = (props) => {
    // TODO Add time and WPM

    const playAgainBut = () =>{
        props.finished(false);
    }

    return (
        <div className="container">
            <h1> <strong>Congratulations!! </strong></h1>
            <p>
                You took {props.timeTaken} seconds to finish typing this phrase. <br/>
                Your WPM is {props.wpm}! (⁀ᗢ⁀)
            </p>
            <button type='button' onClick={playAgainBut}> Play Again </button>
        </div>
    )
}

export default End