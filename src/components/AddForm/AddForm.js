import React, { useState } from "react";

const AddForm = () => {
  const [task, setTask] = useState("");
  const changeTaskHandler = (event) => {
    setTask(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      task: task
    }

    console.log(taskData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="Add a task..."
        onChange={changeTaskHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
