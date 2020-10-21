import {connect} from 'react-redux';

import {LoginPage} from "pages/LoginPage";
import {loginUserEmailAndPassword} from "store/features/app/thunks";
import {RootState} from "../store";



const mapStateToProps = (state: RootState) => ({
    isAuth: state.app.isAuth
})

const mapDispatchProps = {
    authUser: loginUserEmailAndPassword
};


export const connectorLoginPage = connect(mapStateToProps, mapDispatchProps)
export const LoginPageContainer = connectorLoginPage(LoginPage);