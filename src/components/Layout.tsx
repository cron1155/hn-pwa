import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <Link to="/">
          <div>Hacker News</div>
        </Link>

        <LayoutNavbar>
          <NavLink to="/">New</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
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
