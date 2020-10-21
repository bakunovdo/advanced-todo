import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import {AppDrawer} from "components/Drawer/AppDrawer";

import {addListRequest} from "store/features/lists/thunks";

import {TListState} from "../store/features/lists/types";
import {TAppState} from "store/features/app/types";
import {TTodosState} from "../store/features/todos/types";

interface TMapState {
    lists: TListState
    app: TAppState
    todos: TTodosState,
}


const mapStateToProps = (state: TMapState) => ({
    lists: state.lists.items,
    userId: state.app.user?.uid,
    todos: state.todos.items
});

const mapDispatchProps = {
    requestAddList: addListRequest
};

export const connectorAppDrawer = connect(mapStateToProps, mapDispatchProps)

export const AppDrawerContainer: any = compose(withRouter, connectorAppDrawer)(AppDrawer)
