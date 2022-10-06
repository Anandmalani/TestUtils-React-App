import React, { useState }  from 'react'

export default function TextForm(props) {
  const [text, setText]=useState('Enter the text');
  const handleClick=()=>{

    setText(text.toUpperCase());

  }
  const handleClick2=()=>{

    setText(text.toLowerCase());

  }
  const handleClick3=()=>{

    setText("");

  }
  const handleOnChange=(event)=>{

    setText(event.target.value);

  }
  return (
    <>
    <div className="container">
    <h1>{props.heading} </h1>

    <div className="form-floating">
  <textarea
    className="form-control"
    placeholder="Leave a comment here"
    id="floatingTextarea"
    value={text}
    onChange={handleOnChange}
    // defaultValue={""}
  />
  <label htmlFor="floatingTextarea"></label>
</div>

<button type="button" className="btn btn-primary mt-3 " onClick={handleClick} >Convert To Uppercase</button>
<button type="button" className="btn btn-primary mt-3 mx-2" onClick={handleClick2} >Convert To Lowercase</button>
<button type="button" className="btn btn-primary mt-3 " onClick={handleClick3} >Clear Text</button>

</div>
<div className="container">
  <h1>Your Text Summary</h1>
  <p>Total words {text.split(' ').length}</p>
  <p>Total Character {text.trim().length}</p>
</div>
</>



  )
}
