import {connect} from 'react-redux';

import {Header} from "components/Header/Header";
import {signOut} from "store/features/app/thunks";
import {RootState} from "../store";


const mapStateToProps = (state: RootState) => ({
    user: state.app.user
});

const mapDispatchProps = {
    signOut
};


export const connectorHeader= connect(mapStateToProps, mapDispatchProps)
export const HeaderContainer = connectorHeader(Header);

