import React, { useState } from "react";

import Button from "../UI/Button/Button";

const TaskItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkToggleHandler = () => {
    setIsChecked(true);
  };

  return (
    <li className={`task ${isChecked ? "line-through" : ""}`}>
      <Button
        type="button"
        className={`check-btn ${isChecked ? "checked" : ""}`}
        onClick={checkToggleHandler}
      ></Button>
      <div className="task-item">
        {props.children}
      </div>
    </li>
  );
};

export default TaskItem;