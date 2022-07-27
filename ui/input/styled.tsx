import styled from "styled-components";
import { TinyText } from "ui/text";

export const BaseInput = styled.input`
  font-size: 16px;
  border-radius: 6px;
  border: solid 1px;
  border-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
`;
export const Label = styled(TinyText).attrs(() => ({
  as: "label",
}))``;
