import React from 'react'

const End = (props) => {
    // TODO Add time and WPM

    const playAgainBut = () =>{
        props.finished(false);
    }

    return (
        <div className="container">
            <h1> <strong>Finished! </strong></h1>
            <p>
                You have finished the game!
            </p>
            <button type='button' onClick={playAgainBut}> Play Again </button>
        </div>
    )
}

export default End