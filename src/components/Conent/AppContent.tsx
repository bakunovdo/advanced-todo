import React from 'react';
import styled from "styled-components"

const AppContentStyled = styled.div`
  display:flex;
  width: 100%;
  background-color: #f8f8f8;
  box-shadow: inset 5px 0 20px -15px rgba(0,0,0,0.2);
`

export const AppContent: React.FC = (props) => {
    return (
        <AppContentStyled>
            {props.children}
        </AppContentStyled>
    );
};



