import React, {useState} from 'react'
import '../../index.css';
const Rules = (props) => {

    const startBut = () =>{
        props.setStarted(true);
    }

    return (
        <div className="container" >
            <h1> <strong>Rules </strong></h1>
            <p>
                Type in the text box for the highlighted words. The cursor will not progress if you mistype.<br/>
                Correct words will be highlighted in green.<br/>
                Incorrect words will be highlighted in red.<br/>
                WPM will update as you finish each word, WPM is based on the number of characters in each word.
                To insert your own phrases, click the "Custom Phrases" button.
            </p>
            <div>
                <button type="button" onClick={startBut} >Let's Start!</button>
                <button id='custom' type={'button'} onClick={() => props.setCustomCheck(true)}>
                    Custom Phrases
                </button>
            </div>
        </div>
    )
}

export default Rules;