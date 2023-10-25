import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Back from "./components/Back";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='main'>
        <Back />
        <div className='top'>
          <div className='workingArea'>
            <Navbar />
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
