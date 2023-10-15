import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: all 400ms linear;
  padding: 10px;

  &:hover {
    border: 2px solid #ebd8ff;
  }
`;
