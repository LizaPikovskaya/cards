import styled from "styled-components";

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 200px;
  margin-left: auto;
  margin-bottom: 30px;
`;

export const CheckIcon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  pointer-events: none;
`;
