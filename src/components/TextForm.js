import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = () => {
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClrClick = () => {
        let newText="";
        setText(newText)
        props.showAlert("Text cleared", "success")
    }

    const handleOnChange = (event) => {
        console.log("You have changed the text of the textarea")
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    // text is a state variable which is changed or updated using setText function
    // useState is a hook in react
    // the default value of text is given inside useState (an empty string in this case)
    const [text, setText]=useState("");

    // text="new text"  --> wrong way to change the state
    // setText("new text") --> correct way to change the state

    return (
        <>
            {/* here in style one curly brace is because we are using javascript and the second one is because we are writing an object inside that js */}
            <div className='container'  style={{color: props.mode==='dark'?'#F7F7F7':'#393E46'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} rows="10" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#393E46':'white', color: props.mode==='dark'?'#F7F7F7':'#393E46'}}></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} mx-2 my-2`} onClick={handleUpClick}>UpperCase</button>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} mx-2 my-2`} onClick={handleLowClick}>LowerCase</button>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} mx-2 my-2`} onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} mx-2 my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} mx-2 my-2`} onClick={handleClrClick}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'#F7F7F7':'#393E46'}}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((element=>{return element.length!=0})).length} words and {text.length} characters</p>
                <p>You can read this text in {0.008 * text.split(" ").filter((element=>{return element.length!=0})).length} minutes</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Nothing to Preview!"}</p>
            </div>
        </>
    )
}
