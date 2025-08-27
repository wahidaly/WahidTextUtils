import React,{useState} from 'react'

export default function Textforms(props) {
    const handleUpClick=()=>{
    //  console.log("Uppercase was clicked"+text);
     let newtext= text.toUpperCase();
     setText(newtext);
     props.showAlert("Converted to upper case!","success");
    }
     const handleClearClick=()=>{
    //  console.log("Uppercase was clicked"+text);
     let newtext= ("");
     setText(newtext);
    }
    const handleCopy=()=>{
    var text = document.getElementById("mybox");
    text.select();
     props.showAlert("Content copied!","success");
    navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
     props.showAlert("Handled extra spaces!","success");
    }
     const handleLoClick=()=>{
    //  console.log("Uppercase was clicked"+text);
     let newtext= text.toLowerCase();
     props.showAlert("Converted to lower case!","success");
     setText(newtext);
    }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text,setText]=useState("");
  return (
    <>
 <div className="container"style={{color:props.mode==='dark'?'white' :'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey' :'white',color:props.mode==='dark'?'white' :'#042743'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white' :'#042743'}}>
        <h2>Your Text Summary </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in text box to preview here"}</p>



    </div>
    </>
  )
}
