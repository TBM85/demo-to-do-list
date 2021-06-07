import React, { useState } from "react";

import Button from "../UI/Button/Button";

const TaskItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkToggleHandler = () => {
    setIsChecked(true);
  };

  const [isExpand, setIsExpand] = useState(false);
  const expandListHandler = () => {
    setIsExpand(!isExpand);
  };

  const [isEditMode, setEditMode] = useState(false);
  const editHandler = () => {
    setEditMode(true);
  };

  const deleteHandler = () => {
    const taskId = props.task.id;
    props.onDeleteTask(taskId);
  };

  const [isNewValue, setIsNewValue] = useState("");
  const updateValueHandler = (event) => {
    setIsNewValue(event.target.value);
  };

  const [isSaveValue, setIsSaveValue] = useState(props.children);
  const saveHandler = () => {
    setIsSaveValue(isNewValue);
    setEditMode(false);
    setIsExpand(false);
  };

  const cancelHandler = () => {
    setEditMode(false);
    setIsExpand(false);
  };

  return (
    <li className="task">
      {isExpand ? (
        <Button
          type="button"
          ariaLabel="Checkmark the task"
          className={`disable ${isChecked ? "checked btn" : ""}`}
        ></Button>
      ) : (
        <Button
          type="button"
          ariaLabel="Checkmark the task"
          className={`check-btn btn ${isChecked ? "checked" : ""}`}
          onClick={checkToggleHandler}
        ></Button>
      )}
      <div className="task-item">
        {!isEditMode ? (
          <div
            className={`task-content ${isChecked ? "line-through" : ""}`}
            onClick={expandListHandler}
          >
            {isSaveValue}
          </div>
        ) : (
          <input
            type="text"
            className="task-input-content"
            defaultValue={isSaveValue}
            onChange={updateValueHandler}
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
                    className="edit-btn btn"
                    onClick={editHandler}
                  />
                  <Button
                    type="button"
                    className="delete-btn btn"
                    onClick={deleteHandler}
                  />
                </div>
              ) : (
                <Button
                  type="button"
                  className="delete-btn btn"
                  onClick={deleteHandler}
                />
              )
            ) : (
              <Button type="button" onClick={saveHandler}>
                Save
              </Button>
            )}
            <Button
              type="button"
              className="cancel-btn"
              onClick={cancelHandler}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
