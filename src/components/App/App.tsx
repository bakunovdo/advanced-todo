import React from 'react';
import {Route, Switch} from "react-router-dom"

import {TodoListPageContainer} from "containers/TodoListPageContainer";
import {LoginPageContainer} from "containers/LoginPageContainer";
import {HeaderContainer} from "containers/HeaderContainer";
import {SignUpPageContainer} from "containers/SignUpPageContainer";

import './App.scss';

type Props = {
    isAuth: boolean | null
}


export const App: React.FC<Props> = ({isAuth}) => {
    return (
        <React.Fragment>
            <HeaderContainer isAuth={isAuth}/>
            <div className="app">
                <Switch>
                    <Route exact path="/signup" component={SignUpPageContainer}/>
                    <Route exact path="/login" component={LoginPageContainer}/>
                    <Route exact path="/" component={TodoListPageContainer}/>
                    <Route exact path="/important" component={TodoListPageContainer}/>
                    <Route exact path="/planned" component={TodoListPageContainer}/>
                    <Route path="/:listId" component={TodoListPageContainer}/>
                </Switch>
            </div>
        </React.Fragment>
    );
}