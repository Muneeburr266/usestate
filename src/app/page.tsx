this is an use state hook of react 
// 'use client'
// import { useState } from "react";
// export default function Home() {

//   const [name, setName] = useState("Ahmed")

//   const changename = () => {
//     setName((prevName) => (prevName === "Ahmed" ? "Bilal" : "Ahmed"));
//   }
//   return (

//     <div>
//       <h2>use state </h2>
//       <h2>React hook</h2>
//       <br />
//       <p>the name is {name}</p>
//       <div className="bg-black-300 border rounded-lg hover:bg-slate-400  text-center">
//         <button onClick={changename}> click me to change the name </button>
//       </div>


//     </div>

//   );
// }

now this is useeffect hook of react in nextjs 

// 'use client'
// import { useEffect, useState } from "react";
// export default function Home() {

//   const [count, setName] = useState(0)

//   useEffect (()=>{
//     console.log("hello i am fire now name is use state ")

//   } , [])



//   return (

//     <div>
//       <h2>use state </h2>
//       <h2>React hook</h2>
//       <br />
//       <button onClick={ ()=> setName(count +1 ) } >Click to count incriment = {count} </button>

//     </div>

//   );
// }
