import React from 'react'

const End = (props) => {
    let sameCustomButton
    if(props.customVal.name !== ''){
        sameCustomButton = (<button type='button' id='right' onClick={()=>{
            props.setFinished(false);
            props.setStarted(true);
        }}>Play Again(Same Custom Phrase)
        </button>)
    }

    return (
        <div className="container">
            <h1><strong>Congratulations!! </strong></h1>
            <p>
                You took {props.timeTaken} seconds to finish typing this phrase from {props.quoteLocation}! <br/>
                Your WPM is {props.wpm}! (⁀ᗢ⁀)
            </p>
            <button type='button' onClick={() => {
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

            {sameCustomButton}


</div>
)
}

export default End