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

  const [isEditMode, setEditMode] = useState(false);
  const editHandler = () => {
    setEditMode(true);
  };

  const deleteHandler = () => {
    const taskId = props.task.id;
    props.onDeleteTask(taskId);
  };

  const cancelHandler = () => {
    setEditMode(false);
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
        {!isEditMode ? (
          <div
            className={`task-content ${isChecked ? "line-through" : ""}`}
            onClick={expandListHandler}
          >
            {props.children}
          </div>
        ) : (
          <input
            type="text"
            className="task-input-content"
            defaultValue={props.children}
            autoFocus
          />
        )}
        {isExpand && (
          <div className="expand-list">
            {!isEditMode ? (
              !isChecked ? (
                <div className="buttons">
                  <Button
                    type="button"
                    className="edit-btn"
                    onClick={editHandler}
                  />
                  <Button
                    type="button"
                    className="delete-btn"
                    onClick={deleteHandler}
                  />
                </div>
              ) : (
                <Button
                  type="button"
                  className="delete-btn"
                  onClick={deleteHandler}
                />
              )
            ) : (
              <Button type="button">Save</Button>
            )}
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
