import React, {useState,useEffect} from "react"

function App() {
  const [name,setName] = useState("shitoshna");
  const [color,setColor] = useState("green");
  const [height,setHeight] = useState(100);
  return (
    <div>
      <button style = {
        {
          color: color,
          height:height,

        }
      }
      onclick = { ()=> {
      setName("shitoshna Basnet");
      setColor("orange");
      setHeight(200);
      }
    } >
      {name}
    </button>
   </div> );
}
export default App;
  