import React, { useState } from 'react';


function TextForm(props) {


 
  function handleUpClick(){
    setText(text.toUpperCase());
    props.showAlert("success","Converted to UpperCase");
  }

  function handleLoClick(){
    setText(text.toLowerCase());
    props.showAlert("success","Converted to LowerCase");
  }

  function handleClClick(){
     setText("");
     props.showAlert("success","Text Cleared");
  }

  function handleOnChange(e){
      setText(e.target.value);
  }

    const handleCopy = () => {
      navigator.clipboard.writeText(text); 
      props.showAlert("Copied to Clipboard!", "success");
  }


  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
  }


  // //most accourate as it does not count empty string as a word.
  // function countWords(str) {
  //   const arr = str.split(' ');
  //   return arr.filter(word => word !== '').length;
  // }

  const [text,setText]= useState("")
  return (
    <>
    <div className='container' style={{color:props.mode === 'light'?'black':'white'}}>
    <h1 className='mb-3'>{props.heading}</h1>
    <form>
    <div className="form-group md-3">
      <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'#13466e', color:props.mode === 'light'?'black':'white'}}></textarea>
      <button disabled ={text.length===0} type="button" className="btn btn-primary my-4 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled ={text.length===0} type="button" className="btn btn-primary my-4 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled ={text.length===0} className="btn btn-primary my-4 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button disabled ={text.length===0} className="btn btn-primary my-4 mx-2" onClick={handleCopy}>Copy Text</button>
      <button disabled ={text.length===0} type="button" className="btn btn-primary my-4 mx-2" onClick={handleClClick}>Clear Text</button>
    </div>
  </form>
  </div>

  <div className='container my-2' style={{color:props.mode === 'light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charachters.</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview."}</p>
  </div>

  </>
  )
}

export default TextForm