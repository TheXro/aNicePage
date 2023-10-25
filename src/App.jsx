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
                <button>Explore Now</button>
              </div>
              <div className='heroright'>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
              <div className="imagediv"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ReprePlaceat dolore accusantium, eligendi illum fugiat enim dolorum nesciunt fugit sequi sint molestias. Commodi, alias!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aspeio placeat. Similique officiis optio rerum quas!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
