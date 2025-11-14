import React, { useState } from 'react'

export default function TextForms(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!" , "success");
  }
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!" , "success");
  }
  const handleClearClick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = ("");
    setText(newText)
    props.showAlert("Text cleared" , "success");
  }

  const handleOnchange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  
  const [text,setText] = useState('');
  return (
    <>
    
        <div className="container" style= {{color: props.mode==='dark'?'white':'#302A2A'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} style= {{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#302A2A'}} id="MyText" rows="9"></textarea>    </div>
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
         <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase </button>
         <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear </button>
       </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'#302A2A'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.lenght} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
   </>
  )
}

