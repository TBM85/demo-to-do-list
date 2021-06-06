import React, { useState } from "react";

import Button from "../UI/Button/Button";

const TaskItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkToggleHandler = () => {
    setIsChecked(true);
  };

  const [isExpand, setIsExpand] = useState(false);
  const expandListHandler = () => {
    setIsExpand(true);
  };

  const deleteHandler = () => {
    const taskId = props.task.id;
    props.onDeleteTask(taskId);
  };

  const cancelHandler = () => {
    setIsExpand(false);
  };

  return (
    <li className="task">
      <Button
        type="button"
        ariaLabel="Checkmark the task"
        className={`check-btn ${isChecked ? "checked" : ""}`}
        onClick={checkToggleHandler}
      ></Button>
      <div className="task-item">
        <div
          className={`task-content ${isChecked ? "line-through" : ""}`}
          onClick={expandListHandler}
        >
          {props.children}
        </div>
        {isExpand && (
          <div className="expand-list">
            <Button
              type="button"
              className="delete-btn"
              onClick={deleteHandler}
            />
            <Button type="button" onClick={cancelHandler}>
              Cancel
            </Button>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
