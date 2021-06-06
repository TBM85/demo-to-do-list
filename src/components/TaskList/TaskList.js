import React from 'react';
import styled from 'styled-components';

import TaskItem from '../TaskItem/TaskItem';

const Tasks = styled.ul`
  list-style: none;
  text-align: left;
  font-size: calc(12px + 2vmin);
  margin-top: 0.4em;
  padding-left: 0;

  & li {
    border-bottom: 1px solid #c9c7c9;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
  }

  & li .task-item {
    cursor: pointer;
    width: 100%;
  }

  & li .task-item .expand-list {
    justify-content: flex-end;
    display: flex;
  }
`;

const TaskList = (props) => {
  const deleteTaskHandler = (taskId) => {
    const updatedTasks = props.tasks.filter(task => task.id !== taskId);
    props.onUpdateTasks(updatedTasks);
  }

  return (
    <Tasks className="tasks">
      {props.tasks.map((task) => (
        <TaskItem task={task} key={task.id} onDeleteTask={deleteTaskHandler}>
          {task.task}
        </TaskItem>
      ))}
    </Tasks>
  );
};

export default TaskList;