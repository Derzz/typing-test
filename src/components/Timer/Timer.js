import React, {useEffect} from 'react'

const Timer = (props) =>{

    useEffect(() => {
        const interval = setInterval(() => {
            props.setTime(props.time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [props.time]);

    return(
        <span>Time Taken: {props.time}</span>
    )
}

export default Timer