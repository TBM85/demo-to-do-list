import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: grid;

  & input,
  & button {
    font-size: calc(16px + 1vmin);
  }

  & input {
    padding: 0.25em 0.5em;
  }
`;

const AddForm = () => {
  const [task, setTask] = useState("");
  const changeTaskHandler = (event) => {
    setTask(event.target.value);
  };

  const [isAdding, setIsAdding] = useState(false);
  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const endAddingHandler = () => {
    setIsAdding(false);
  };

  const [isMouseOver, setIsMouseOver] = useState(false);
  const extendAddingHandler = () => {
    setIsMouseOver(true);
  };

  const contractAddingHandler = () => {
    setIsMouseOver(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      task: task,
    };

    console.log(taskData);
  };

  return (
    <div className="add-tasks">
      {!isAdding && (
        !isMouseOver ? (
          <button
            type="button"
            onMouseOver={extendAddingHandler}
          >
            +
          </button>
        ) : (
          <button
            type="button"
            onClick={startAddingHandler}
            onMouseOut={contractAddingHandler}
          >
            Add a new task
          </button>
        )
      )}
      {isAdding && (
        <Form onSubmit={formSubmitHandler}>
          <input
            type="text"
            placeholder="Add a task..."
            onChange={changeTaskHandler}
          />
          <div className="button-group">
            <button type="submit">Add</button>
            <button type="button" onClick={endAddingHandler}>
              Hide
            </button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default AddForm;
