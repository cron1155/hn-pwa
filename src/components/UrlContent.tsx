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
`;

export default UrlContent;
