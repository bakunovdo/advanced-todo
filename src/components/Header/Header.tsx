import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {ConnectedProps} from "react-redux";

import {connectorHeader} from "containers/HeaderContainer";

import {SHeader, SRightSide} from "./styled";
import {LogoutOutlined} from "@ant-design/icons/lib";

export type CProps = ConnectedProps<typeof connectorHeader>

type Props = {
    isAuth: boolean | null
}


export const Header: React.FC<Props & CProps> = (props) => {
    const logOutHandler = () => {
        props.signOut()
        return <Redirect to="/login" push/>
    }

    return (
        <SHeader>
            <NavLink to="/"> To Do </NavLink>
            {props.isAuth && (
                <SRightSide>
                    <span className="user-email">{props.user?.email}</span>
                    <LogoutOutlined onClick={logOutHandler}/>
                </SRightSide>
            )}
        </SHeader>
    );
};
