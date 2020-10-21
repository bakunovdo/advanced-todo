import {connect} from 'react-redux';

import {SignUpPage} from "../pages/SignUpPage";
import {signInWithUserEmailAndPassword} from "store/features/app/thunks";


const mapDispatchProps = {
    signup: signInWithUserEmailAndPassword
};


export const connectorSignUpPage = connect(null, mapDispatchProps)
export const SignUpPageContainer = connectorSignUpPage(SignUpPage);