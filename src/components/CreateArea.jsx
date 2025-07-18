import React, {useState} from "react";

function CreateArea() {
  const [input, setInput] = useState("")
  const [title, setTitle] = useState([]);

  function handleChange(event){
    setInput(event.target.value)
    
  }

  function handleClick(event){
    event.preventDefault();
    setTitle((prevItems)=>{
      return [...prevItems, input];
    })
    setInput("")
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value = {input}/>
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button onClick = {handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
