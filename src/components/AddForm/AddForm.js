import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";

const Form = styled.form`
  display: grid;

  & input {
    font-size: calc(16px + 1vmin);
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    border: 1px solid #c9c7c9;
    color: #504f50;
    width: calc(40vw + 40vmin);
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
      task: task
    };

    // Send the new tasks to the "App" component
    props.onPassTask(taskData);
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