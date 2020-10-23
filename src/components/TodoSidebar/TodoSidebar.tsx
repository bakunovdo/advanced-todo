import React, {useEffect, useState} from 'react';
import classNames from "classnames";

import {ConnectedProps} from "react-redux";

import {Input, Typography} from "antd";

import {SSidebarContent, STodoSidebar} from "./styled";
import {connectorTodoSidebar} from "containers/TodoSidebarContainer";
import {SidebarFooter} from "./Footer";
import {TodoSteps} from "./TodoSteps";

type FromParentProps = {
    closeHandler: () => void
    showSidebar: boolean
}

type Props = FromParentProps & ConnectedProps<typeof connectorTodoSidebar>

export const TodoSidebar: React.FC<Props> = (props) => {
    const {
        updateTodoRequest,
        addStepRequest,
        selectedTodo,
        deleteStepRequest,
        toggleStepRequest
    } = props

    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [step, setStep] = useState("")

    useEffect(() => {
        if (selectedTodo) {
            setTitle(selectedTodo.title)
            setNote(selectedTodo.note)
            setStep("")
        }
    }, [selectedTodo])

    const updateTodo = () => {
        const updateData = {title, note}
        if (
            (updateData.title !== selectedTodo?.title) ||
            (updateData.note !== selectedTodo?.note)
        ) {
            updateTodoRequest(selectedTodo?.id, updateData)
        }
    }

    useEffect(() => {
        if (selectedTodo && note === "") updateTodo()
    }, [note])

    const newStepHandler = () => {
        if (selectedTodo && step) {
            addStepRequest(selectedTodo, step)
        }
    }

    const sidebarClass = classNames({
        hideSidebar: !props.showSidebar
    })

    return (
        <STodoSidebar className={sidebarClass}>
            <SSidebarContent>
                <div className="section">
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={updateTodo}
                        onPressEnter={updateTodo}
                    />
                </div>

                <div className="section">
                    <Typography.Title level={5}>Steps</Typography.Title>
                    <Input
                        placeholder={"Add step"}
                        value={step}
                        onChange={(e) => setStep(e.target.value)}
                        onPressEnter={newStepHandler}
                    />
                </div>

                {selectedTodo?.steps && selectedTodo.steps.length > 0 && (
                    <div className="section">
                        <TodoSteps
                            selectedTodo={selectedTodo}
                            deleteStepRequest={deleteStepRequest}
                            toggleStepRequest={toggleStepRequest}
                        />
                    </div>)}

                <div className="section description">
                    <div className="header">
                        <Typography.Title level={5}>
                            Note
                        </Typography.Title>
                        {note && <span onClick={() => setNote("")}>Clear</span>}
                    </div>
                    <Input.TextArea
                        value={note}
                        autoSize={{minRows: 5, maxRows: 5}}
                        onChange={(e) => setNote(e.target.value)}
                        onBlur={updateTodo}
                        onPressEnter={updateTodo}
                    />
                </div>
            </SSidebarContent>
            <SidebarFooter closeHandler={props.closeHandler}/>
        </STodoSidebar>
    )
}