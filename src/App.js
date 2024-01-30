import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


// import About from './components/About';
function App() {
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null);
  
  const set_Alert = (message, type) => {
      setAlert({
          msg: message,
          type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#084c98';
      set_Alert("Dark mode has been enabled", "success");
      document.title = 'TextUtils  - Light Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils app install now';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 3000);
    }else{
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      set_Alert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode;'
    }  

  };

  return (
    <>
    
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alerts alert={alert} />
        <TextForm heading="Enter the text to analyze" mode={mode} set_Alert={set_Alert} />
      </div>
    </>
  );
}

export default App;
