import styled from "styled-components";

export const TodoListItemStyled = styled.div`
    width: 100%;
    height: 64px;
    margin-bottom: 7px;
    padding: 0 20px;
    background-color: #ffffff;
    transition: background-color ease-in-out 200ms;
    user-select: none;
    border: 1px solid #ececec;
    border-radius: 8px;
    box-shadow: 10px 20px 10px -28px rgb(8 8 8);
    
    &.active {
      border: 1px solid #005ea9;
    }
  
    &:hover {
        background-color: #fafafa;
        box-shadow: none;
    }
    
    button {
        border-radius: 10px;
    }
    
    .ant-list-item {
      height: 100%;
    }
    
    .ant-list-item > div {
      display:flex;
      align-items: center;
      & > div {
        margin-left: 10px;
      }
    }
    
       
    .ant-list-item + div:last-child {
      display:flex;
      margin-left: 10px;
    }
`

export const STodoMiniData = styled.div<any>`
  display: flex;
  align-items: center;
  width: auto;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  color: black;
  
  background-color: ${(props :any) => props.backColor};
  span:last-child {
    margin-left: 5px;
  }
`

export const StarButton = styled.div`
  margin-right: 5px;
  font-size: 18px;
  
  :hover {
    color: #585858;
  }
  
  .anticon-star > svg > path {
    :first-child{
      fill:gold;
    }
    :last-child {
      fill:#404040;
    }
  }
`