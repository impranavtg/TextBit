import React,{useState} from 'react';
import './Main.css';
import Navbar from './Navbar';
const Main=()=> {
    const [text,setText]=useState('');
    const changeHandler=(event)=>{
        setText(event.target.value);
    }
    const UpHandler=()=>{
        const newText=text.toUpperCase();
        setText(newText);
    }
    const LowHandler=()=>{
        const newText=text.toLowerCase();
        setText(newText);
    }
    const ClearHandler=()=>{
        setText('');
    }
    const CopyHandler=()=>{
        const newText=text;
        navigator.clipboard.writeText(newText);
    }
    const SpacesHandler=()=>{
        const newText=text.split(/\s+/);
        setText(newText.join(" "));
    }
    const characterHandler=()=>{
        let newText=text.split(/\s+/);
        newText=newText.join("");
        return newText.length;
    }
    
    const [mainTheme,setMainTheme]=useState({
        color:'#244444',
        backgroundColor:'white'
    });

    const [buttonTheme,setButtonTheme]=useState({
        border: '2px solid #244444',
        color:'white',
        backgroundColor:'#242424'
    });
    const [inputTheme,setInputTheme]=useState({
        backgroundColor:'white'
    });
    const dataExchange=(data,colorData)=>{
        if(data==='Dark'){
            setMainTheme({
                    color:'white',
                    backgroundColor:'#244444'
            });
            setButtonTheme({
                border:'2px solid white',
                color:'#244444',
                backgroundColor:'#f7f4f4'
            });
            setInputTheme({
                backgroundColor:'rgb(247, 244, 244)'
            });
        }
        else if(data==='Light'){
            setMainTheme({
                color:'#244444',
                backgroundColor:'white'
            });
            setButtonTheme({
                border: '2px solid #244444',
                color:'white',
                backgroundColor:'#244444'
            });
            setInputTheme({
                backgroundColor:'white'
            });
        }
        // console.log(colorData);
        if(colorData==='Green'){
            setButtonTheme({
                border: '2px solid #244444',
                color:'#A3DA8D',
                backgroundColor:'#146356'
            });
        }
        else if(colorData==='Purple'){
            setButtonTheme({
                border: '2px solid #244444',
                color:'#C996CC',
                backgroundColor:'#3D2C8D'
            });
        }
        else if(colorData==='Yellow'){
            setButtonTheme({
                border: '2px solid #244444',
                color:'#FDDB3A',
                backgroundColor:'#41444B'
            });
        }
        else if(colorData==='Pink'){
            setButtonTheme({
                border: '2px solid #244444',
                color:'#FF5F5F',
                backgroundColor:'#2C2C2C'
            });
        }
    }

    return (
        <div>
        <Navbar func={dataExchange}/>
        <div className="mainDiv" style={mainTheme}>
        <div className="inputDiv">
        <h1 style={mainTheme}>📃 Type Something 👇</h1>
            <textarea placeholder='Enter text here' className='textarea' cols="50" rows="10" value={text} onChange={changeHandler} style={inputTheme}></textarea>
            </div>
            <div className="buttons">
                <button onClick={UpHandler} style={buttonTheme}>Convert to Uppercase</button>
                <button onClick={LowHandler} style={buttonTheme}>Convert to Lowercase</button>
                <button onClick={CopyHandler} style={buttonTheme}>Copy to Clipboard</button>
                <button onClick={SpacesHandler} style={buttonTheme}>Remove Extra Spaces</button>
                <button onClick={ClearHandler} style={buttonTheme}>Clear text</button>
            </div>
            <div className="summary">
                <p>{text===""?'0':text.split(/\s+/).filter((element)=>element.length!==0).length} {text.split(/\s+/).filter((element)=>element.length!==0).length===1?'word':'words'} and  {characterHandler()} {characterHandler()===1||characterHandler()===0?'character':'characters'}</p>
            </div>
            </div>
        </div>
    )
}
export default Main;