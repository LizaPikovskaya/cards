import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 80px;
  row-gap: 50px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 40px auto;
  min-width: 100px;
  padding: 15px 25px;
  cursor: pointer;
  background-color: rgba(87, 54, 163, 1);
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  transition: 250ms linear;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #ebd8ff;
    color: #000;
  }
`;

export const BackButton = styled.button`
  display: block;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: all 400ms linear;

  &:hover {
    background: rgba(87, 54, 163, 1);
    color: white;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  margin: 40px auto;
  font-size: 18px;
  text-align: center;
`;
