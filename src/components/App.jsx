import { use, useState } from 'react';
import './App.css'
import NavBar from './NavBar';
import TextForms from './TextForms';
import Alert from './Alert';
function App() { 

const [mode, setmode] = useState('light'); // whether dark Mode is enabled or not
const [alert, setalert] = useState(null)

const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
}

const togglemode = ()=>{
    if (mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#302A2A';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
  }
}
  return (
    <>
    <NavBar Title="TextUtils" mode={mode} togglemode={togglemode}>
    </NavBar>
    <Alert Alert= {alert}/>
    <div className="container my-3"> 
    <TextForms showAlert={showAlert} heading="Enter The Text to Analyze Below" mode={mode}/>  
    
    </div>
    </>

);
}

export default App
