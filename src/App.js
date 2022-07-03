import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]= useState('light');
 const [alert,SetAlert]=useState(null);


 //to show alerts
 const showAlert = (type, message) =>{
  SetAlert({
    type : type,
    message: message
  })
  setTimeout(()=>{
    SetAlert(null);
  },1500)
 }

 //to change modes
 const toggleMode = (cls) => {
  console.log(cls)
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor="#042743";
    showAlert("success","Dark mode is enabled.");
    // document.title='Dark Mode.'
    // setInterval(()=>{
    //   document.title='Dark Mode.'
    // },2000)
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("success","Light mode is enabled.")
  }
 }

  return (
    <Router>
    <div>
<Navbar title="Textutils" about="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />

<div className='container my-3'>
<Routes>
  <Route exaxt path='/' element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
  <Route exact path='/about' element={<About/> }/>
</Routes>
</div>
 

</div>
</Router>

  );
}

export default App;
