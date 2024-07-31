import React from "react";

const TaskItem = ({ task, settasks, tasks }) => {
  const changestate = () => {
    settasks(
      tasks.map((t) =>
        t.name === task.name ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deletetask = () => {
    settasks(tasks.filter((t) => t.name !== task.name));
  };

  return (
    <div>
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>
      <p>Completed:{task.completed.toString()}</p>
      <button onClick={changestate}>Change State</button>
      <button onClick={deletetask}>Delete</button>
    </div>
  );
};

export default TaskItem;
