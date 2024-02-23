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

/*import React ,{useState}from 'react'

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

export default App*/

/*import React,{useState} from 'react'

export const App = () => {
  const[data,setData] = useState({
    username:'',
    password:'',

  })
  
  const{username,password} = data;
  const onChange = e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const onSubmitHandler = e=>{
    e.preventDefault();
    console.log(data)
  }

  return (
    <div>
      <center>
      <form onSubmit = {onSubmitHandler}>
      <input type = "text" placeholder = "username" name = "username" value={username} onChange = {onChange}/>
      <br/>
      <input type = "password" placeholder = "Password" name = "password" value={password} onChange = {onChange}/>
      <br/>
      <input type = "submit"/>
      </form>
      </center>
    </div>
  )
}
export default App*/

/*import React from 'react'

export const App = () => {
  const arr = ["React js","Node js","Express js","Angular js"]
  return (
    <div>
      {
        arr.map(
          (value,index) => 
          (
            <li key = {index}>{value}</li>
            
          )
        )
      }
    </div>
  )
}
export default App*/
/*import React from 'react';

export const App = () => {
  const courses = [
    { id: 1, name: "React js" },
    { id: 2, name: "Node js" },
    { id: 3, name: "Angular js" },
    { id: 4, name: "Express js" }
  ];
  return (
    <div>
      
        {courses.map((value) => (
          <li key={value.id}>{value.name}</li>
        ))}
      
    </div>
  );
};

export default App;*/

/*import React from 'react'

export const App = () => {
  const names = ['James','John','Paul','Ringo','George'];
  const filtered = names.filter((name)=> name.includes('J'))
  return (
    <div>
      {
        filtered.map((item)=>
        (
          <li>{item}</li>
        )
        )
      }
    </div>
  )
}
export default App*/

/*import React from 'react'

export const App = () => {
  const numbers = [10,12,3,40,50];
  const filtered = numbers.filter((number)=>number>20)
  return (
    <div>
      {
        filtered.map((item)=><li>{item}</li>)
      }
    </div>
  )
}
export default App*/


/*import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'



export const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>

    </div>
  )
}
export default App*/


/*import React,{useState} from 'react'

export const App = () => {
  const[data,setData] = useState({
    username : "",
    password : ""
  })
  const{username,password} = data;
  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const submitHandler = e=>
  {
    e.preventDefault();
    console.log(data);
  }
  
  return (
    <div>
      <center>
        <form onSubmit = {submitHandler}>
          <input type = "text" name = "username" placeholder = "Username" onChange = {onChange}/>
          <br/>
          <input type = "password" name = "password" placeholder = "Password" onChange = {onChange}/>
          <br/>
          <input type = "submit"/>

        </form>
      </center>
    </div>
  )
}
export default App*/

/*import React ,{useState}from 'react'

export const App = () => {
  const [data,setData] = useState(
    {
      username: '',
      email: '',
      password:'',
      confirmPassword:'',
    }

  )
  
  const{username,email,password,confirmPassword} = data;
  const onChange = e=>
  {
    setData({...data,[e.target.name]:e.target.value})
  }
  const onSubmit = e=>
  {
    e.preventDefault();
    if(username.length <= 5)
    {
      alert("username must be at least 5 characters")
    }
    else if(password !== confirmPassword)
    {
      alert("passwords are not matching")
    }
    else{
      console.log(data);
    }
  }

  return (
    <div>
      <center>
        <form onSubmit = {onSubmit}>
          <input type = "text" name = "username" value = {username} placeholder = "Username" onChange = {onChange}/>
          <br/>
          <input type = "email" name = "email" value = {email}  placeholder = "email" onChange = {onChange}/>
          <br/>
          <input type = "password" name = "password" value = {password} placeholder = "Password" onChange = {onChange}/>
          <br/>
          <input type = "password" name = "confirmPassword" value = {confirmPassword} placeholder = "Confirm Password" onChange = {onChange}/>
          <br/>
          <input type = "submit" name = "submit"/>

        </form>
      </center>
    </div>
  )
}
export default App*/



/*import React,{useState} from 'react'

export const App = () => {
  const[input,setInput] = useState("");
  const[result,setResult] = useState(0);
  const handler = e=>
  {
    setInput(e.target.value);
  }


  return (

    <div>
      <br/>
      <center>
        <input type = "text" onChange = {handler} name = "input" value = {input}/>
        <br/>
        <br/>
        
        
        <button onClick = {()=> setResult(eval(input))}>Result </button>
        <h4>Result is : {result}</h4>
      </center>
    </div>
  )
}
export default App;*/

/*import React,{useState,useEffect} from 'react'


export const App = () => {

  const[count,setCount] = useState(0);
  useEffect(()=>console.log(count),[count])
  
  return (
    <div>
      <button onClick = {()=>setCount(count+1)}>Click</button>
      <h1>{count}</h1>
    </div>
  )
}
export default App*/

import React,{useState,useEffect} from 'react'

export const App = () => {
  const[data,setData] = useState([]);

  useEffect(()=>
  {
    console.log("useefffect")
    fetch("https://gorest.co.in/public/v2/users/").then(
      RESPONSE => RESPONSE.json()
    ).then(json => setData(json))
  },[])

  
  
  return (
    <div>
      {data.map(item => <li key = {item.id}>{item.name}</li>)}
    </div>
  )
}
export default App















