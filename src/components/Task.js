import React, { useState } from "react";

export default function Task(props) {
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(props.task.content);
  const [errorMsg, setErrorMsg] = useState("");

  const handler = (e) => {
    console.log(e);
    props.handleRemove(props.task);
  };

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
    } else {
      if (content !== "") {
        props.editTask(props.task, { content: content, time: props.task.time });
        setEdit(false);
        setErrorMsg("");
      } else if (content === "") {
        setErrorMsg("Can't be empty!");
      }
    }
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleChange = (e) => {
    if (e.key === "Enter" && content !== "") {
      props.editTask(props.task, { content: content, time: props.task.time });
      setEdit(false);
      setErrorMsg("");
    } else if (e.key === "Enter" && content === "") {
      setErrorMsg("Can't be empty!");
    }
  };

  return (
    <div className="task-container">
      {!edit ? (
        <span className="task-content">{props.task.content}</span>
      ) : (
        <input
          className="task-edit"
          value={content}
          placeholder={errorMsg}
          onChange={handleContent}
          onKeyPress={handleChange}
        ></input>
      )}

      <span className="task-function">
        <button onClick={handleEdit}>Edit</button>
        <button id="remove-btn" onClick={handler}>
          Remove
        </button>
      </span>
    </div>
  );
}
