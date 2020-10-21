import styled from "styled-components";

export const SListTitle = styled.div`
  width: 100%;
  padding-left: 30px;
  h1 {
    margin-bottom: 0;
  }
  
  div {
    transform: translateX(-11px);
    width: 300px;
  }
  
  .ant-input {
    width: 300px;
    height: 46px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 38px;
    line-height: 1.23;
    border: none;
    background: #e8e8e8;
    border-radius: 20px;  
    
    :hover, :focus {
      border:none;
      box-shadow: none;
    }
  }
  
`

export const ListActions = styled.div`
  display:flex;
  cursor: pointer;
  right: 0;
  color: #a5a5a5;
  font-size: 18px;
  
  & > span {
    margin-right: 20px;
  }
`

export const STodoListHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  
`