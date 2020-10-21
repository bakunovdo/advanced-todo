import styled from "styled-components";

export const STodoSidebar = styled.div`
    display: flex;
    flex-direction: column;
    background: #f1f1f1;
    width:  100%;
    max-width: 320px;
    overflow: hidden;
    border-left: 1px solid #eaeaea;
    
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    
    .section {
      margin-top: 15px;
      :first-child {
        margin-top: 0;
      }
      & + .description {
        width: 100%;
        .header {
          display:flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          h5 {
            margin-bottom: 0;
          }
          
          span {
            margin-right: 20px;
            color: #5d5d5d;
            cursor: pointer;
            user-select: none;
            
            :hover {
              color: #666666;
            }
          }
        }
      }
    }
    
    &.hideSidebar {
      width: 0; 
    }   
    
    .ant-divider {
      margin: 18px 0;
    }
    
    textarea {
        resize: none;
    }
    
`

export const SSidebarFooter = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    padding: 0 10px;
    min-height: 38px;
    justify-content: space-between;
    background: #f4f4f4;
    border-top: 1px solid #eaeaea;
`

export const SSidebarContent = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`
export const SButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: inherit;
    :hover {
      background-color: white;
    }
`

export const STodoSteps = styled.div`
    background-color: white;
    border: 1px solid #eaeaea;
    color: #767678;
    max-height: 300px;
    overflow-y: auto;
    
    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: #dedede; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #8d8d8d; 
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #6d6d6d; 
    }
    
`

export const SStep = styled.div`
    position:relative;
    display:flex;
    align-items: center;
    border-bottom: 1px solid #bababa;
    
    .step-deleteIcon {
      position: absolute;
      right: 10px;
      top:50%;
      transform: translateY(-50%);
    }
    
    .step-checkbox {
      padding: 14px;
      height: 44px;
    }
   
    .step-text {
      height: 100%;
      width: 100%;
      margin-right: 30px;
    }
    
    span {
      display:block;
    }
           
    svg {
        cursor: pointer;
        font-size: 11px;
    }
    
    input[type="text"] {
      border: none;
      outline: none;
      width: 100%;
      :hover {
        background-color: #f4f4f4;
      }
    }
    
    
    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
    
`