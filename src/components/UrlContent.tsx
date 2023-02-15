import styled from "styled-components";

export interface UrlContentProps {
  url: string;
}

const UrlContent: React.FC<UrlContentProps> = ({ url }) => {
  return (
    <UrlContainer href={url}>
      <span>{url}</span>
    </UrlContainer>
  );
};

const UrlContainer = styled.a`
  padding: 1rem 1rem;
  border: solid 1px #2b2b2b;
  display: flex;
  justify-content: center;
  width: 25%;
  max-width: 25%;
  word-break: break-all;

  & span {
    opacity: 0.5;
  }

  & span:hover {
    opacity: 0.9;
  }
`;

export default UrlContent;
