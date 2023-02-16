import { FC } from "react";
import styled from "styled-components";

export interface LoadingSkeletonProps {}

export const LoadingSkeleton: FC<LoadingSkeletonProps> = () => {
  return (
    <Container>
      <Header></Header>
      <Body></Body>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem;

  & > * {
    margin-bottom: 0.2rem;
  }
`;

const Header = styled.div`
  background-color: #232323;
  width: 50%;
  height: 1rem;
  animation: pulse 1s infinite;
`;
const Body = styled.div`
  background-color: #232323;
  animation: pulse 1s infinite;
  width: 25%;
  height: 1rem;
`;

export default LoadingSkeleton;
