import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const [text, setText] = useState("enter your text here")
    return (
        <div className='container my-3'>
            <div className="mb-3">
                <label htmlFor="textFrom" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="textBox" rows="15" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">convert to uppercase</button>
            <button onClick={handleLowClick} className="btn btn-secondary mx-3">convert to lowercase</button>
        </div>
    )
}
