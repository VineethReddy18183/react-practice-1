/*import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name : "Vineeth Reddy B",
    email: "vineethreddyys@gmail.com"
  }
  render() {
    
    return (
      <div>Hi This is {this.state.name} and my mail id is {this.state.email}</div>
    )
  }
}*/

/*import React,{useState} from 'react'

export const App = () => {
  const [name,setName] = useState("Vineeth Reddy B");
  return (
    <div>
      <h1>This is {name}</h1>
    </div>
  )
}

export default App*/
/*import React, { Component } from 'react'
import Display from './Display'

export default class App extends Component {
  state = {
    name : "Vineeth Reddy B"
  }
  render() {
    return (
      <div>
        <h1>
          <Display name = {this.state.name}/>
        </h1>
      </div>
    )
  }
}*/
/*import React from 'react';

export const App = () => {
  const styling = {color: "white", backgroundColor: "lightgrey", textAlign: "center", padding: "50px"};

  return (
    <div style={{margin: "10px"}}>
      <h1 style={styling}>Welcome to react practice</h1>
    </div>
  );
}

export default App*/

/*import React from 'react'

export const App = () => {
  return (
    <div>
      <button onClick = {()=>console.log("clicked")}>Click me </button>
    </div>
  )
}
export default App*/

/*import React,{useState}from 'react'

export const App = () => {
  const[name,setName] = useState("Vineeth")
  const[count,setCount] = useState(0)
  return (
    <div>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick = {()=>setName("Vineeth Reddy B")}>Change Name</button>
      <br/>
      <button onClick = {()=>setCount(count+1)}>Change Count</button>
  
    </div>
  )
}
export default App*/
/*import React ,{useState,useEffect}from 'react'

export const App = () => {
  const[count,setCount] = useState(0)
  useEffect(()=>console.log(count),[count])
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick = {()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default App*/

import React ,{useState}from 'react'

export const App = () => {
  const[user,setUser] = useState("")
  const handler = e=>{
    setUser(e.target.value)
  }
  return (
    <div>
      <center>
      <input type = "text" placeholder = "username" value = {user} name = "user" onChange = {handler}/>
      <br/>
      {user}
      </center>
      
    </div>
  )
}

export default App








