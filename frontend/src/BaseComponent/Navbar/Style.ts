import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100vw;
  background-color: rgb(36,100,39);
  padding: 0 16px;
  letter-spacing: 12px;
  color: white;
  
`;
export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14px;
  > *:not(:last-child) {
    margin-right: 10px;
  }
`;
