import React from 'react';
import styled from 'styled-components';

import TaskItem from '../TaskItem/TaskItem';

const Tasks = styled.ul`
  list-style: none;
  text-align: left;
  font-size: calc(12px + 2vmin);
  margin-top: 0.4em;

  & li {
    border-bottom: 1px solid #c9c7c9;
    margin-bottom: 0.5em;
    padding: 0 0.25em;
  }
`;

const TaskList = (props) => {
  return (
    <Tasks className="tasks">
      {props.tasks.map((task) => (
        <TaskItem task={task} key={task.id}>
          {task.task}
        </TaskItem>
      ))}
    </Tasks>
  );
};

export default TaskList;