import React, {useState} from 'react';
import styled from "styled-components"


import {Input} from 'antd';

const Form = styled.form`
  padding: 0 5px;
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`

type Props = {
    addTodo: (title: string) => void
}


export const TodoForm: React.FC<Props> = ({addTodo}) => {
    const [title, setTitle] = useState("")

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (title) {
            addTodo(title)
            setTitle("")
        }
    }

    return (
        <Form onSubmit={onHandleSubmit}>
            <Input
                allowClear
                placeholder="Your task..."
                size="large"
                value={title}
                onChange={onChangeHandler}
            />
        </Form>
    );
};