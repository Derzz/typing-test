import React from 'react'
import './Custom.css'

const Custom = (props) => {
    return (
        <div className="container">
            <h1> <strong>Custom Phrase Input </strong></h1>
            <p>
                Input the custom quote and quote origin in the text boxes. <br/>
            </p>

            <div>
                <h4> Custom Quote </h4>
                <input
                    className={'customInput'}
                    type={'text'}
                    value={props.customVal.name}
                    onChange={(e) => props.setCustomVal(e.target.value, props.customVal.origin)}
                    autoFocus={true}
                />
            </div>

            <div>
                <h4> Quote Origin </h4>
                <input
                    className={'customInput'}
                    type={'text'}
                    value={props.customVal.origin}
                    onChange={(e) => props.setCustomVal(props.customVal.name, e.target.value)}
                />
            </div>


            <div>
                <button type='button' onClick={() =>{
                    if(props.customVal.name.trim() !== '' && props.customVal.origin.trim() !== '') {
                        props.setCustomCheck(false);
                        props.setStarted(true);
                    }
                    else{
                        alert('Please fill out both fields or click \'Cancel\'.')
                    }
                }}>
                    Start!
                </button>
                <button type='button' id='right' onClick={() => {
                    props.setCustomCheck(false);
                    props.setCustomVal('', '');
                }}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Custom