import React, {useEffect} from 'react'
import { useStateContext } from '../context'
import AddTask from '../components/AddTask';
import Task from '../components/Task'
import Logout from '../components/Logout';
import styled from 'styled-components'

export default function Tasks() {
    const {tasks, fetchTasks} = useStateContext();

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <Wrapper>
        <AddTask/>
        {tasks?.length ? (tasks?.map((task) => (
            <Task key={task._id} {...task}/>
        ))) :  <h3>No tasks has been added</h3>}
        <Logout/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h3 {
        text-align: center;
    }
`
