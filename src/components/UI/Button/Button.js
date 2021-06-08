import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  cursor: pointer;
  font-size: calc(14px + 1vmin);
  padding: 0.25em 1em;
  border-radius: 0.25em;
  border: 1px solid #c9c7c9;
  color: #504f50;
  height: 2em;
  margin: 0.5em 0.25em;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Button = (props) => {
  return (
    <Btn
      type={props.type}
      aria-label={props.ariaLabel}
      className={props.className}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      {props.children}
    </Btn>
  );
};

export default Button;
