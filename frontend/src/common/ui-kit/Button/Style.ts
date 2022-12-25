import styled from 'styled-components';

export const Root = styled.button<{width?: number; height?: number; color?: string; bgcolor?: string; margin?: string}>`
  width: ${({ width })=> width ?? 80}px;
  height: ${({ height })=> height ?? 30}px;
  background-color: ${({ bgcolor })=> bgcolor ?? 'black'};
  color:  ${({ color })=> color ?? 'white'};
  border-radius: 3px;
  margin: ${({ margin })=>margin ?? '8px'};
`;
