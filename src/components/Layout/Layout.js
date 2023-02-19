import { Container } from 'components/Layout/Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </Container>
  );
};
