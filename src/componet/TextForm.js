import react, { useState } from "react"


export default function TextForm() {
    const handleUpClick=()=>{
        // console.log("uppercase was clicked");
        // setText("have you clicked o handleup click");
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleLoClick=()=>{
        // console.log("uppercase was clicked");
        // setText("have you clicked o handleup click");
        let newText= text.toLowerCase();
        setText(newText)
    }

    const handClearClick=()=>{
        // console.log("uppercase was clicked");
        // setText("have you clicked o handleup click");
        let newText= " ";
        setText(newText)
    }


    const handleOnchange=(event)=>{
        // console.log("onchange");
        setText(event.target.value)
    }

    const[text, setText]=useState("");
  return (
    <>
    <div className="container">
        <h1>Enter Text To analyze</h1>
  <div className="mb-3">

   <textarea className='form-control' value={text} onChange={handleOnchange} id="my box" rows="8"></textarea>
  </div>
 <button className='button btn-primary mx-2'onClick={handleUpClick}>Convert to UpperCase</button>
 <button className='button btn-primary mx-2'onClick={handleLoClick}>Convert to LowerCase</button>
 <button className='button btn-primary mx-2'onClick={handClearClick}>Text Clear</button>
    </div>

    
    <div className="container">
        <h2>your text sumarry</h2>
        <p>{text.split(" ").length } words and {text.length}</p>
        <p>{0.08* text.split(" ").length} Minutes read</p>
        <h2>prview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
