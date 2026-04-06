import {useState} from "react"
import "./App.css"
let App=()=>{
  let [task,setTask]=useState("")
  let [arr,setArr]=useState([])
  let [ind,setInd]=useState(-1)

  let fun=(e)=>{
    setTask(e.target.value)
  }

  let add=()=>{
    setArr([...arr,task])
    setTask("")
  }

  let edit=(i)=>{
      setTask(arr[i])
      setInd(i)
  }
  
  let upd=()=>{
     arr[ind]=task
     setArr([...arr])
     setData("")
     setInd(-1)

  }

  let del=(i)=>{
    arr.splice(i,1)
    setArr([...arr])
  }
  return(
  <div className="container">
  <h1>Todo App</h1>

  <div className="input-section">
    <input
      type="text"
      placeholder="Enter Task"
      onChange={fun}
      value={task}
    />

    {
      ind === -1
        ? <button onClick={add}>Add</button>
        : <button onClick={upd}>Update</button>
    }
  </div>

  <ul>
    {
      arr.map((str, i) => (
        <li key={i}>
          <span>{str}</span>

          <div className="icons">
            <i className="fa-solid fa-pen-to-square" onClick={() => edit(i)}></i>
            <i className="fa-solid fa-trash" onClick={() => del(i)}></i>
          </div>
        </li>
      ))
    }
  </ul>
</div>)
}
export default App