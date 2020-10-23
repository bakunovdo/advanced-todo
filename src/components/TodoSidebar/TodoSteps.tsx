import React from 'react';

import {STodoSteps} from "./styled";
import {StepItem} from "./StepItem";

import {TTodo} from "types";

type Props = {
    toggleStepRequest: (selTodo:TTodo, id:number) => void
    deleteStepRequest: (selTodo:TTodo, id:number) => void
    selectedTodo: TTodo
}

export const TodoSteps: React.FC<Props> = (props) => {
    const {toggleStepRequest, deleteStepRequest, selectedTodo} = props
    return (
        <STodoSteps>
            {
                selectedTodo.steps
                    .map((step) =>
                        <StepItem
                            key={step.id}
                            id={step.id}
                            title={step.title}
                            completed={step.completed}

                            toggleStep={() => toggleStepRequest(selectedTodo, step.id)}
                            deleteStep={() => deleteStepRequest(selectedTodo, step.id)}
                        />)
            }
        </STodoSteps>
    );
};


