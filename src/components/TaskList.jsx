import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, settasks }) => {
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} settasks={settasks} tasks={tasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
