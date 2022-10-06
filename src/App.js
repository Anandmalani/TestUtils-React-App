import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import Alert from './components/Alert';
import React,{ useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  // const [alert, setAlert] = useState(null);
  // const showAlert=()=>{
  //   setAlert(<Alert/>)
  // }
  return (
    <>
     <Router>
    <Navbar title="TEXTUTILS"  />
    {/* <Alert/> */}
    

        <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"   />}>
            </Route>
          </Routes>

    <div className="container my-3">
    
    </div>
    </Router>

    </>
  );
}

export default App;
