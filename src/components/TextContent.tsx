import styled from "styled-components";

export interface TextContentProps {
  content: string;
}

const TextContent: React.FC<TextContentProps> = ({ content }) => {
  return <Content dangerouslySetInnerHTML={{ __html: content }}></Content>;
};

const Content = styled.div`
  & p {
    margin: 0 0;
  }

  & a {
    color: blueviolet;
  }
`;

export default TextContent;
