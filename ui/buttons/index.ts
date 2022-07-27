import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  padding: 9px;
  font-weight: 700;
  cursor: pointer;
`;
export const PrimaryButton = styled(Button)`
  background-color: #6a994e;
  &:hover {
    background-color: #76cc88;
  }
`;
export const SecondaryButton = styled(Button)`
  background-color: #023169;
  &:hover {
    background-color: #0050b1;
  }
`;
export const CancelButton = styled(Button)`
  background-color: #bc4749;
  &:hover {
    background-color: #cf4745;
  }
`;
