import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";


function App() {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);


  const handleClick1=(e)=>{
    setfName(e.target.value);
    setSubmitted(false);
  }
  const handleClick2=(e)=>{
    setlName(e.target.value);
  }
  const submitForm=(e)=>{
    e.preventDefault();
    setName(`${fName} ${lName}`);
    setSubmitted(true);
  }


  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <h1>Full Name Display</h1>
        <label>First Name: </label>
        <input type="text" onChange={handleClick1} value={fName} required></input>
        <br/>
        <label>Last Name: </label>
        <input type="text" onChange={handleClick2} value={lName} required></input>
        <br/>
        <button type="submit">Submit</button>
        </form>
        {isSubmitted &&
          <p>Full Name: {name}</p>
      } 
           
    </div>
  );
}

export default App;
