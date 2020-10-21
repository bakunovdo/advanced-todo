import styled from "styled-components";

export const SHeader = styled.div`
  width: 100%;
  min-height: 45px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0078D7;
  padding: 10px;
  a {
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin-left: 4px;
    letter-spacing: 1px;
    user-select: none;
  }
`

export const SRightSide = styled.div`
  margin-right: 30px;
  
  .anticon-logout {
    color: #0078d7;
    background-color: white;
    padding: 2px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
  }
`
