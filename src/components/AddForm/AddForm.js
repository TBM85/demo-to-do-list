import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";

const Form = styled.form`
  display: grid;

  & input {
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
      task: task,
    };

    console.log(taskData);
  };

  return (
    <div className="add-tasks">
      {!isAdding && (
        !isMouseOver ? (
          <Button
            type="button"
            className="open-btn"
            onMouseOver={extendAddingHandler}
          >
            +
          </Button>
        ) : (
          <Button
            type="button"
            className="open-btn"
            onClick={startAddingHandler}
            onMouseOut={contractAddingHandler}
          >
            Add a new task
          </Button>
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
            <Button type="submit">Add</Button>
            <Button type="button" onClick={endAddingHandler}>
              Hide
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default AddForm;