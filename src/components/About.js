import React, { useState } from 'react';


function About() {

const [myStyle, setMyStyle]=useState({
    color: 'black',
    backgroundColor: 'white',

 })

const [btnText, setBtnText]= useState("Enable Dark Mode on About Us Section.");

const toggleStyle = () => {
  if(myStyle.color==='white'){
    setMyStyle({
        color:'black',
        backgroundColor:'White'
    })
    setBtnText("Enable Dark Mode on About Us Section.")
  }else{
    setMyStyle({
        color:'white',
        backgroundColor:'Black',
        border: '1px solid white'
    })
    setBtnText("Disable Dark Mode on About Us Section.")
  }
 }

  return (
    <div className='container' style={myStyle}>
        <h2 className='my-2'>About Us</h2>
    <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or removing extra spacing.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
               <strong>Free to Use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

            </div>
            </div>
        </div>
</div>
<div className='container my-2'>
<button type="button" class="btn btn-primary btn-sm" onClick={toggleStyle}>{btnText}</button>
</div>
</div>
  )
}

export default About