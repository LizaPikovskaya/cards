import { Container } from "../GlobalStyles/Container.styled";
import { HeaderStyled } from "./Header.styled";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Navigation />
        </div>
      </Container>
    </HeaderStyled>
  );
};
