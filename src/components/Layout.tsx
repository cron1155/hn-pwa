import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <div>Hacker News</div>
        <LayoutNavbar>
          <a href="/">New</a>
          <a href="/favorites">Favorites</a>
        </LayoutNavbar>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div``;

const LayoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const LayoutNavbar = styled.div`
  display: flex;

  & > * {
    margin-left: 0.5rem;
  }

  & > a {
    font-weight: 600;
  }
`;

const LayoutBody = styled.div`
  padding: 1rem;
`;

export default Layout;
