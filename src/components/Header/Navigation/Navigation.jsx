import { StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/tweets">Tweets</StyledNavLink>
    </nav>
  );
};
