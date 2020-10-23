import {connect} from 'react-redux';

import {SignUpPage} from "pages/SignUpPage";
import {signInWithUserEmailAndPassword} from "store/features/app/thunks";
import {RootState} from "store";


const mapStateToProps = (state: RootState) => ({
    isAuth: state.app.isAuth
})

const mapDispatchProps = {
    signup: signInWithUserEmailAndPassword
};


export const connectorSignUpPage = connect(mapStateToProps, mapDispatchProps)
export const SignUpPageContainer = connectorSignUpPage(SignUpPage);