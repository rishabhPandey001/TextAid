// is a function bassed component so import react not rquired
import {useState} from "react"
import Navbar from "./componentsH/navbar";
import TextForm from "./componentsH/TextForm"
import About from "./componentsH/About"
import Login from "./componentsH/Login"
import {
    Routes,
    Route
  } from "react-router-dom";

function Textutils(){
    const [mode,setmode] = useState('light');
    const toggleMode = () => {
        if(mode==='light'){
            setmode('dark')
            document.body.style.backgroundColor ='grey'
            document.title("TextDark")
        }
        else{
            setmode('light')
            document.body.style.backgroundColor ='white'  
            document.title("TextLight")
        }
    }
    return (
        <>
            < Navbar title="TextUtils" mode ={mode} toggleMode = { toggleMode } />
            <Routes>
                <Route path="/" element={  <div className="container" > <TextForm heading="Enter your text to be analyzed"  mode={mode}/> </div> } />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
            </Routes>
          
                    
        </>    
    )
}


export default Textutils;