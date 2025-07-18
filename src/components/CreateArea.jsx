import React, { useState } from "react";
import Note from "./Note";
import Title from "./Title";

function CreateArea(props) {
  const [input, setInput] = useState("");
  const [inputContent, setInputContent] = useState("");

  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleContent(event) {
    setInputContent(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setContent((prevContent) => {
      return [...prevContent, inputContent];
    });
    setTitle((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
    setInputContent("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={input}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleContent}
          value={inputContent}
        />
        <button onClick={handleClick}>Add</button>
      </form>
      <div className="note-containter">
        {title.map((x, index) => (
          <Note key={index} title={x} content={content[index]} />
        ))}
      </div>
    </div>
  );
}

export default CreateArea;
