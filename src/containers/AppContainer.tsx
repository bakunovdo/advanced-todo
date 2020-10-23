import React from "react";
import {connect, ConnectedProps} from 'react-redux';

import {firebaseAuth, firestore} from "database";
import {App} from "components/App/App";

import {setUserData} from "store/features/app/thunks";
import {getTodosRequest} from "store/features/todos/thunks";
import {getListsRequest} from "store/features/lists/thunks";
import {setAppInitialize} from "store/features/app/actions";

import {RootState} from "store";

type TAppProps = ConnectedProps<typeof connectorApp>


class AppCont extends React.Component<TAppProps, {}> {
    async componentDidMount() {
        firebaseAuth.onAuthStateChanged(async (user) => {
            if (user) {
                const UserData = {
                    uid: user.uid,
                    email: user.email,
                };

                await this.props.setUserData(UserData, true)
                await this.props.getTodosRequest(user.uid)
                await this.props.getListsRequest(user.uid)
            } else this.props.setUserData(null, false)

            await this.props.setAppInitialize(true)
        });
    }

    render() {
        if (!firestore || !this.props.appInitialize) return null

        return <App isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.app.isAuth,
    appInitialize: state.app.initialized
});


const mapDispatchProps = {
    setUserData,
    setAppInitialize,
    getTodosRequest,
    getListsRequest
};


const connectorApp = connect(mapStateToProps, mapDispatchProps)
export const AppContainer = connectorApp(AppCont)