import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Convertd to upperCase", "success")

    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text Convertd to lowerCase", "success")
    }
    const handleSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Whitespace removed", "success")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }



    const [text, setText] = useState("")

    const [mystyle, setmystyle] = useState(
        {
            backgroundColor: "white",
            color: "black"
        }
    )
    const [btntext, setbtntext] = useState("enable dark mode")

    const toggleStyle = () => {
        if (mystyle.color === "black") {
            setmystyle({
                color: "white",
                backgroundColor: "black"
            })
            setbtntext("enable light mode")
        } else {
            setmystyle({
                color: "black",
                backgroundColor: "white"
            })
            setbtntext("enable dark  mode")
        }
    }

    const handleCopy = () => {
        let text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    return (
        <>
            <div className='container my-3' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <label htmlFor="textFrom" className="form-label" >{props.heading}</label>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="textBox" rows="15" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary">convert to uppercase</button>
                <button onClick={handleLowClick} className="btn btn-secondary mx-2">convert to lowercase</button>
                <button onClick={handleSpaceClick} className="btn btn-success mx-2">remove white space</button>
                <button onClick={handleClearClick} className="btn btn-danger mx-2">clear text</button>
                <button onClick={toggleStyle} className="btn btn-danger mx-2">{btntext}</button>
                <button onClick={handleCopy} className="btn btn-danger mx-2">Copy to Clipboard</button>
            </div>
            <div className="container my-3">
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> Your Text Summary </h2>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> {text.toString().split(" ").length} words and {text.length} characters </p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> you can read this in {0.008 * text.toString().split(" ").length} minutes.</p>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview:</h2>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text}</p>
            </div>
        </>
    )
}
