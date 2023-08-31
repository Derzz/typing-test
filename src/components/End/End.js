import React from 'react'

const End = (props) => {
    return (
        <div className="container">
            <h1><strong>Congratulations!! </strong></h1>
            <p>
                You took {props.timeTaken} seconds to finish typing this phrase from {props.customVal.origin}! <br/>
                Your WPM is {props.wpm}! (⁀ᗢ⁀)
            </p>

            <button type='button'  onClick={()=>{
                props.setFinished(false);
                props.setStarted(true);
            }}>Play Again(Same Phrase)
            </button>

            <button type='button' id='right' onClick={() => {
                props.setCustomVal('', '');
                props.setFinished(false);
            }}> Play Again(Random Phrase)
            </button>

            <button type='button' id='right' onClick={() => {
                props.setFinished(false);
                props.setCustomVal('', '');
                props.setStarted(false);
                props.setCustomCheck(true);
            }}>Play Again(New Custom Phrase)
            </button>



</div>
)
}

export default End