import './Navbar.css';
import React,{useState,useEffect} from 'react';

const Navbar=(props)=> {
    const [theme,setTheme]=useState('Light');
    const [colorTheme,setColorTheme]=useState('Light');
    const [myStyle,setMyStyle]=useState({
        color:'#f7f4f4',
        backgroundColor:'#244444'
    });
    const themeHandler=()=>{
        if( document.getElementById('purpleSwitch').checked===false && document.getElementById('greenSwitch').checked===false && document.getElementById('yellowSwitch').checked===false && document.getElementById('pinkSwitch').checked===false){
        if(theme==='Light'){
            setMyStyle({
                color:'#244444',
                backgroundColor:'#f7f4f4'
            });
            setTheme('Dark');
            setColorTheme("");
        }
        else if(theme==='Dark'){
            setMyStyle({
                color:'#f7f4f4',
                backgroundColor:'#244444'
            });
            setTheme('Light');
            setColorTheme("");
        }
    }
    
    else if(document.getElementById('purpleSwitch').checked && theme==='Light'){
        setTheme('Dark');
    }
    else if( document.getElementById('greenSwitch').checked && theme==='Light'){
        setTheme('Dark');
    }
    else if( document.getElementById('yellowSwitch').checked && theme==='Light'){
        setTheme('Dark');
    }
    else if( document.getElementById('pinkSwitch').checked && theme==='Light'){
        setTheme('Dark');
    }
    else if(document.getElementById('purpleSwitch').checked && theme==='Dark'){
        setTheme('Light');
    }
    else if( document.getElementById('greenSwitch').checked && theme==='Dark'){
        setTheme('Light');
    }
    else if(document.getElementById('yellowSwitch').checked && theme==='Dark'){
        setTheme('Light');
    }
    else if( document.getElementById('pinkSwitch').checked && theme==='Dark'){
        setTheme('Light');
    }
    }
    const colorThemeHandler=()=>{
        if(document.getElementById('greenSwitch').checked && colorTheme!=='Green'){
            setMyStyle({
                color:'#A3DA8D',
                backgroundColor:'#146356'
            });
            setColorTheme('Green');
            document.getElementById('purpleSwitch').checked=false;
            document.getElementById('yellowSwitch').checked=false;
            document.getElementById('pinkSwitch').checked=false;
        }
        else if( document.getElementById('purpleSwitch').checked && colorTheme!=='Purple'){
            setMyStyle({
                color:'#C996CC',
                backgroundColor:'#3D2C8D'
            });
            setColorTheme('Purple');
            document.getElementById('greenSwitch').checked=false;
            document.getElementById('yellowSwitch').checked=false;
            document.getElementById('pinkSwitch').checked=false;
        }
        else if( document.getElementById('yellowSwitch').checked && colorTheme!=='Yellow'){
            setMyStyle({
                color:'#FDDB3A',
                backgroundColor:'#41444B'
            });
            setColorTheme('Yellow');
            document.getElementById('greenSwitch').checked=false;
            document.getElementById('purpleSwitch').checked=false;
            document.getElementById('pinkSwitch').checked=false;
        }
        else if( document.getElementById('pinkSwitch').checked && colorTheme!=='Pink'){
            setMyStyle({
                color:'#FF5F5F',
                backgroundColor:'#2C2C2C'
            });
            setColorTheme('Pink');
            document.getElementById('greenSwitch').checked=false;
            document.getElementById('purpleSwitch').checked=false;
            document.getElementById('yellowSwitch').checked=false;
        }
        else if(document.getElementById('greenSwitch').checked===false && colorTheme==='Green'){
            if(theme==='Dark'){
                setMyStyle({
                    color:'#244444',
                backgroundColor:'#f7f4f4'
                });
                setTheme('Dark');
                setColorTheme("");
            }
           else if(theme==='Light'){
            setMyStyle({
                color:'#f7f4f4',
                backgroundColor:'#244444'
            });
            setTheme('Light');
            setColorTheme("");
           }
        }
        else if( document.getElementById('purpleSwitch').checked ===false && colorTheme==='Purple'){
            if(theme==='Dark'){
                setMyStyle({
                    color:'#244444',
                backgroundColor:'#f7f4f4'
                });
                setTheme('Dark');
                setColorTheme("");
            }
           else if(theme==='Light'){
            setMyStyle({
                color:'#f7f4f4',
                backgroundColor:'#244444'
            });
            setTheme('Light');
            setColorTheme("");
           }
        }
        else if( document.getElementById('yellowSwitch').checked ===false && colorTheme==='Yellow'){
            if(theme==='Dark'){
                setMyStyle({
                    color:'#244444',
                backgroundColor:'#f7f4f4'
                });
                setTheme('Dark');
                setColorTheme("");
            }
           else if(theme==='Light'){
            setMyStyle({
                color:'#f7f4f4',
                backgroundColor:'#244444'
            });
            setTheme('Light');
            setColorTheme("");
           }
        }
        else if( document.getElementById('pinkSwitch').checked===false && colorTheme==='Pink'){
            if(theme==='Dark'){
                setMyStyle({
                    color:'#244444',
                backgroundColor:'#f7f4f4'
                });
                setTheme('Dark');
                setColorTheme("");
            }
           else if(theme==='Light'){
            setMyStyle({
                color:'#f7f4f4',
                backgroundColor:'#244444'
            });
            setTheme('Light');
            setColorTheme("");
           }
        }
    }

   useEffect(() => 
    props.func(theme,colorTheme), [theme,colorTheme]); 
    return (
        <div style={myStyle}>
            <nav className='nav'>
            <div className='navText'>
                <a href='/' style={myStyle}><h1 className='logo'>TextBit</h1></a>
                </div>
                <div className='colorThemes'>
                <label className="circleSwitches">
                    <input type="checkbox" id="greenSwitch" onClick={colorThemeHandler}/>
                    <span className="colors green"></span>
                    </label>
                    <label className="circleSwitches">
                    <input type="checkbox" id="purpleSwitch" onClick={colorThemeHandler}/>
                    <span className="colors purple"></span>
                    </label>
                    <label className="circleSwitches">
                    <input type="checkbox" id="yellowSwitch" onClick={colorThemeHandler}/>
                    <span className="colors yellow"></span>
                    </label>
                    <label className="circleSwitches">
                    <input type="checkbox" id="pinkSwitch" onClick={colorThemeHandler}/>
                    <span className="colors pink"></span>
                    </label>
                </div>
                <div className='navSwitch'>
                <li>{theme} mode</li>
                <label className="switch">
                <input type="checkbox" onClick={themeHandler}/>
                <span className="slider round"></span>
                </label>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;