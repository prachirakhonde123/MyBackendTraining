import React , {useState} from 'react'

export default function TextForm(props) {
  const changeToUpperCase = ()=>{
     //console.log("UpperCase was Clicked!" + text);
     let newText = text.toUpperCase()
     setText(newText)  // We change the value of text using SetText (State)
  }

  const changeToLowerCase = ()=>{
     let newText2 = text.toLowerCase()
     setText(newText2)
  }

  const clearText = ()=>{
     let clear = ""
     setText(clear)
  }

  const changeToToggleCase = ()=>{
    let str = text
    let res = ""
    for(let i = 0; i < str.length;i++){
        let k = str.charCodeAt(i)
        if(k>=65 && k<=90){
            k = k+32;
            res += String.fromCharCode(k)
            k = 0
        }
        else if(k>=97 && k<=122){
            k = k-32;
            res+=String.fromCharCode(k)
            k=0
        }
        else if(k===32){
          res += String.fromCharCode(k)
        }
        else{
          res += str[i]
        }
    }
    setText(res)
  }

  const handleCopy = function(){
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter Text Here')    //state
  // text = "New Text"  // wrong way to change state
  //setText("New Text");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-2"  onClick = {changeToUpperCase} >Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2"  onClick = {changeToLowerCase} >Convert to lowercase</button> 
        <button className="btn btn-primary mx-2"  onClick = {changeToToggleCase}>Convert to tOgGlEcAsE</button>
        <button className="btn btn-primary mx-2"  onClick = {handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2"  onClick = {clearText} >Clear Text</button>
    </div>
    <div className="container my-2">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
