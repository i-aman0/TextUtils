import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 

  // alert is an object here having two values message and type 
  // message is what we want to display in the alert
  // and type is the type of alert e.g. warning, succedd, primary etc.
  const [alert, setAlert]=useState(null); 

  const showAlert=(message, type)=>{
    setAlert({
      msg: message, // this msg and message can be same also like below
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#111b26";
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils - Dark Mode"  // dynamically changes the title of the page on the browser when we change the mode to dark mode 
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils - Light Mode"  // dynamically changes the title of the page on the browser when we change the mode to light mode 
    }
  }

  return (
    <>
      
      {/* earlier when navbar was outside the router then Link was not working, so for Link to work, we have to put the navbar inside the router as done below */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/> */}

        {/* <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/>
        <About/> */}

          <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-5">
              <Routes>
                <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
                </Route>
                <Route exact path="/about" element={<About mode={mode}/>}>
                </Route>
              </Routes> 
            </div>
          </Router>
    </>
  );
}

export default App;
