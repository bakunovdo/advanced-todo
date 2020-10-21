import styled from "styled-components";


export const AppDrawerStyled = styled.div`
  display:flex;
  flex-direction: column;
  
  
  .anticon + span {
    width: 100%;
    position: relative;
  }
 
  .baseStyles {
    margin: 15px 22px 0;
    width: min-content;
    font-size: 10px;
  }
 
  .NonCollapseMenu {
    width: 200px;
  }
  
  .CollapseMenu {
      width: 70px;
  }
  
  .defaultMenu {
    border-right: none;
    transition: width 180ms ease;
    .ant-menu-item {
      padding: 0 27px!important;
    }
    .anticon-unordered-list, .anticon-calendar, .anticon-star, .anticon-home {
      font-size: 18px!important;
      line-height: 18px!important;
    }
    
    & * li {
    display: flex;
    align-items: center;      
    }
  }
`

export const SMenuAddList = styled.div`
  display: flex;
  align-items: center;
  padding: 0 25px;
  height: 50px;
  width: 200px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  &.collapsed {
    width: 70px; 
  }
  
  span {
    font-size: 20px!important;
    display:block;
  }
  
  & > p {
    margin-left: 6px;
    margin-bottom: 0;
    line-height: normal;
    display: inline-block;
    white-space: nowrap;
  }
  
  &.hideText > p {
    color: white;
    margin: 0;
    width: 0;
    opacity: 0;
  }
  
   :hover {
    &.hoverOn {
        background-color: #e6f7ff;
        color: #1890ff;
   }
  }
`

export const SFooterDrawer = styled.div`
  height: 38px;
  background: #f4f4f4;
  border-top: 1px solid #eaeaea;
`

export const SListItem = styled.div`
  display:flex;
  justify-content: space-between;
  
`
