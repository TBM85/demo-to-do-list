import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {
  return (
    <ul className="tasks">
      {props.tasks.map((task) => (
        <TaskItem task={task} key={task.id}>
          {task.task}
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;