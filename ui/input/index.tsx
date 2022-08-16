import React from "react";
import { BaseInput, Label } from "./styled";
import type { UseFormRegister, FieldValues } from "react-hook-form";
type props = {
  name: string;
  label?: string;
  placeHolder?: string;
  default?: string;
  register: UseFormRegister<FieldValues>;
};

const Input: React.FC<props> = (props) => {
  const register = props.register;

  return (
    <Label style={{ display: "flex", flexDirection: "column" }}>
      {props.label}
      <BaseInput
        defaultValue={props.default || ""}
        placeholder={props.placeHolder}
        {...register(props.name)}
      ></BaseInput>
    </Label>
  );
};

export default Input;
