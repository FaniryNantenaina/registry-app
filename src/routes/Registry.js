import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Registry() {
  const [registryData, setRegistryData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [error , setError] = useState(false)

  const addItem = (e) => {
    e.preventDefault();
    if(error) return ;


    const tempData = [...registryData];
    tempData.push(textInput);
    setRegistryData(tempData);
    setTextInput("");
  };

  useEffect(() => {
    if(textInput.length >10 ) setError(true);
        else setError(false)

  } , [textInput])
  console.log(registryData);

  const removeItem = (index ) => {
    let newData = [...registryData]
    newData.splice(index,1)
    setRegistryData(newData)
  }

  const editItem = (index) => {
    if(error) return ;
    let newData = [...registryData]
    newData[index]= textInput;
    setRegistryData(newData)
  }

  return (
    <div>
      <h1>Registry</h1>
      <Link to="/">Click here to go home</Link>
      <form onSubmit={addItem}>
        <label>
          Text input:
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {error ? <span style={{color : "red"}}>Error occured</span> : null}
      {
        registryData.map((item, index) => {
            return (
            <li key={index}>{item}<button onClick={() => removeItem(index)}>Remove</button> <button onClick={() => editItem(index)}> Update</button></li> 
        )
        })
      }
    </div>
  );
}

export default Registry;
