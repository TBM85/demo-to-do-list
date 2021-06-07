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

  & li .expand-list {
    justify-content: flex-end;
    display: flex;
  }

  & li .task-input-content {
    font-family: "Handlee", cursive;
    font-size: calc(12px + 2vmin);
    color: #504f50;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 575px) {
    & li .task-item button {
      padding: 0.25em !important;
    }
    & li .cancel-btn {
      width: 4em !important;
    }
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