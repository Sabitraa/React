// import React, { useState, useEffect } from "react";

// let datalist = [
//   { name: "Nayan Pathak", age: 20 },
//   { name: "Ujjwal Pathak", age: 22 },
//   { name: "Sita Pathak", age: 24 },
//   { name: "Sitoshna Pathak", age: 17 }
// ]

// function App() {


//   // const [name,setName] = useState("shitoshna");
//   // const [color,setColor] = useState("black");
//   // const [height,setHeight] = useState("30px");
//   // const [count,setCount] = useState(0);

//   // useEffect(()=> {
//   //   console.log("first use effect");
//   //   if(count>3){
//   //     setColor("green");
//   //   }
//   //   if(count>6){
//   //     setHeight("50px");
//   //   }
//   // },[count])

//   const [data, setData] = useState(datalist)
//   return (
//     // <center>
//     //   <br></br>
//     //   <br></br>
//     //   <div>
//     //     {
//     //       data.map((roww, index)=>{
//     //         return (
//     //           <div key={index} >
//     //             <span>The name is : {roww.name}</span>
//     //             <span>&nbsp;and his/her age is : {roww.age}</span>
//     //           </div>
//     //         )
//     //       })
//     //     }
//     //   </div>
//     //   <br></br>
//     //   <br></br>
//     //   <div>
//     //     <button>Click me</button>
//     //   </div>
//     // </center>
//     //     <div>
//     //       <button style ={
//     //         {
//     //           color: color,
//     //           height: height,

//     //       }
//     //     }
//     //     onClick = { ()=>{
//     //      setName("shitoshna basnet");
//     //      setColor("blue");
//     //      setHeight("10px");
//     //     }
//     //   } >
//     //     {name}
//     //   </button>
//     //   <button 
//     //   onClick ={ ()=> { 
//     //     setCount((p) => p+1);
//     //   }
//     // }>
//     //   increase{count}
//     // </button>
//     //     </div>

//     <div></div>
//   );
// }
// export default App;
import logo from './logo.svg';
import react, {useState,useEffect} from 'react';
import axios from 'axios';
import Card from './Components/Card'

function App(){
  const [data, setData] = useState([])
  const fetchBlog = async ()=> {
    const res = await axios.get("https://65cdc8f3c715428e8b3f0dbc.mockapi.io/blog")
    setData(res.data)
  }
  useEffect(()=> {
    fetchBlog()
  } , [])
  return(
    <>
    <h1 style={{margin:'10px auto', textAlign:'center'}}>Blogs</h1>
    <hr/>
    <div style={{
      padding:'20px',
      display: 'grid',
      gridTemplateColumns: "repeat(3, 1fr)" ,
      gap:20
    }}>
      {
        data.map((row)=> {
          return (
            <Card key={row.id} row={row}/>
          )
        })
      }
        </div>
    </>
  );
}
export default App;
