import React, { useState } from "react";

const TaskForm = ({ tasks, settasks }) => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  const addtask = (e) => {
    e.preventDefault();
    const newTask = {
      name: name,
      description: description,
      completed: false,
    };
    settasks([...tasks, newTask]);
  };

  return (
    <form onSubmit={addtask}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />

      <input type="submit" value="Submit form" />
    </form>
  );
};

export default TaskForm;
