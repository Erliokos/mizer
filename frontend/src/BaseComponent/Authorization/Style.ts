import styled from 'styled-components';

export const AuthorizationCantainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgb(36,100,39);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 2px;
  z-index: 20;
`;

export const Name = styled.div<{color?: string}>`
  color: ${({ color }) => color ?? 'white'};
  margin: 8px;
`;
