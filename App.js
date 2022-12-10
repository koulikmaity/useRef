// // It create a mutable variable which will not re-render the components.
// // To access a DOM elements directly



// import { useEffect, useState, useRef } from 'react';
// import './App.css';

// function App() {

//   const [myData, setMyData] = useState("");
//   // const [ count, setCount ] = useState(0);

//   const count = useRef(0);

//   const inputElem = useRef("");

//   useEffect(() => {
//     // setCount(count + 1);
//     count.current = count.current + 1;
//   });
//   const changeStyle = () => {
//     console.log("inputElem", inputElem.current);
//     inputElem.current.style.backgroundColor = "#82E0AA";
//     inputElem.current.focus();
//   }

//   return (
//     <div className="App">
//       <input
//       ref={inputElem}
//         type="text"
//         value={myData}
//         onChange={(e) => setMyData(e.target.value)}
//       />
//       {/* <p>The number of time render : { count.current }</p> */}
//       <br />
//       <button onClick={changeStyle} >submit</button>
//     </div>
//   );
// }

// export default App;



import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handelTime() {
    
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
      console.log(time);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={() => handelTime()}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Pause</button>
      <button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;