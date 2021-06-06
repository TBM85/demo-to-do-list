import React, { useState } from "react";
import styled from "styled-components";

import cross from '../../assets/icons/cross.svg';
import Button from "../UI/Button/Button";

const Form = styled.form`
  display: grid;
  margin-top: -1em;

  & .input-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  & .clear-input {
    display: flex;
    position: absolute;
  }

  & img {
    min-width: 3em;
    text-align: center;
    cursor: pointer;
  }

  & input {
    font-size: calc(16px + 1vmin);
    padding: 0.4em 2em 0.4em 0.5em;
    border-radius: 0.25em;
    border: 1px solid #c9c7c9;
    color: #504f50;
    width: 100%;
  }
`;

const AddForm = (props) => {
  const [task, setTask] = useState("");
  const changeTaskHandler = (event) => {
    setTask(event.target.value);
  };

  const [isMouseOver, setIsMouseOver] = useState(false);
  const extendAddingHandler = () => {
    setIsMouseOver(true);
  };

  const contractAddingHandler = () => {
    setIsMouseOver(false);
  };

  const [isAdding, setIsAdding] = useState(false);
  const startAddingHandler = () => {
    setIsAdding(true);
    setIsMouseOver(true);
  };

  const endAddingHandler = () => {
    setIsAdding(false);
    setIsMouseOver(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      id: Math.random().toString(),
      task: task,
    };

    // If the input is empty, the task will not be added
    if (task.trim().length === 0) {
      setIsAdding(false);
      setIsMouseOver(false);
      return;
    }

    resetInputHandler();

    // Send the new tasks to the "App" component
    props.onPassTask(taskData);
  };

  const resetInputHandler = () => {
    setTask("");
  }

  return (
    <div className="add-tasks">
      {!isAdding &&
        (!isMouseOver ? (
          <Button
            type="button"
            ariaLabel="Extend Button"
            className="open-btn plus-btn"
            onMouseOver={extendAddingHandler}
          />
        ) : (
          <Button
            type="button"
            ariaLabel="Open Form"
            className="open-btn"
            onClick={startAddingHandler}
            onMouseOut={contractAddingHandler}
          >
            Add a new task
          </Button>
        ))}
      {isAdding && (
        <Form onSubmit={formSubmitHandler}>
          <div className="input-container">
            <input
              type="text"
              value={task}
              placeholder="Add a task..."
              onChange={changeTaskHandler}
            />
            <div className="clear-input" type="button" onClick={resetInputHandler}>
              <img src={cross} alt="cross icon" />
            </div>
          </div>
          <div className="button-group">
            <Button type="submit" ariaLabel="Add Task">Add</Button>
            <Button type="button" ariaLabel="Hide Form" onClick={endAddingHandler}>
              Hide
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default AddForm;
