import React, {useState} from 'react'
import '../../index.css';
const Rules = (props) => {

    const startBut = () =>{
        props.started(true);
    }

    return (
        <div className="container" >
            <h1> <strong>Rules </strong></h1>
            <p>
                Type in the text box for the highlighted words. The cursor will not progress if you mistype.<br/>
                Correct words will be highlighted in green.<br/>
                Incorrect words will be highlighted in red.<br/>
            </p>
            <button type="button" onClick={startBut} >Let's Start!</button>
        </div>
    )
}

export default Rules;