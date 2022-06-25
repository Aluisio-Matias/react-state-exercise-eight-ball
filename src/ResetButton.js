import React from "react";
import './ResetButton.css'

const ResetButton = () => {

    function reset() {
        setMsg(msg);
        setColor(color);
    }

    return (
        <div>
            <button className='reset-button' onClick={() => reset()}>Reset</button>
        </div>
    )
}

export default ResetButton;