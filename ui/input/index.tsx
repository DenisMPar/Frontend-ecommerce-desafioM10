import React from "react";
import { BaseInput, Label } from "./styled";

type props = {
  label?: string;
  placeHolder?: string;
};

const Input: React.FC<props> = (props) => {
  return (
    <Label style={{ display: "flex", flexDirection: "column" }}>
      {props.label}
      <BaseInput placeholder={props.placeHolder} name={props.label}></BaseInput>
    </Label>
  );
};

export default Input;
