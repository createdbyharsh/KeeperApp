import React, { useState } from "react";
import Note from "./Note";

function InputArea(props) {
  const [inputs, setInputs] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setNotes((prevValue) => {
      return [...prevValue, inputs];
    });
    setInputs({ title: "", content: "" });
  }

  function deleteItem(id) {
    setNotes((prevValue) => {
      return prevValue.filter((x, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={inputs.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputs.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
      <div className="note-holder">
        {notes.map((x, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={x.title}
              content={x.content}
              onTap={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default InputArea;
