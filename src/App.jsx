import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='main'>
        <div className='back'></div>
        <div className='top'>
          <div className='workingArea'>
            <Navbar />
            <div className='hero'>
              <div className='heroleft'>
                <div className='elem'>
                  <h1>theXro</h1>
                  <h1>theXro</h1>
                  <h1>theXro</h1>
                  <h1>theXro</h1>
                </div>
                <div className='elem'>
                  <h1>gives zero</h1>
                  <h1>gives zero</h1>
                  <h1>gives zero</h1>
                  <h1>gives zero</h1>
                </div><div className='elem'>
                  <h1>fucks.</h1>
                  <h1>fucks.</h1>
                  <h1>fucks.</h1>
                  <h1>fucks.</h1>
                </div>
              </div>
              <div className='heroright'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
