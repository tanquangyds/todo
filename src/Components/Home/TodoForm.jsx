import React, { useState } from "react";
import'./TodoForm.css';

const TodoForm = (props) => {
    const { onSubmit } = props;
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const [desc, setDesc] = useState('');
  const handleSubmitForm = (e) => {
      e.preventDefault();
    if (!onSubmit) {return};
    const newTask = {
        title: title,
        creator: creator,
        desc: desc
    }
    console.log(newTask);
    onSubmit(newTask)
  };
  return (
    <form className="input-form" onSubmit={handleSubmitForm}>
      <label className="label">Title</label>
      <input name="title" type="text" value={title} onChange = {(e) => setTitle(e.target.value)}></input> <br/>
      <label className="label">Creator</label>
      <input name="creator" type="text" value={creator} onChange = {(e) => setCreator(e.target.value)}></input> <br/>
      <label className="label">Description</label>
      <input name="description" type="text" value={desc} onChange = {(e) => setDesc(e.target.value)}></input> <br/>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
