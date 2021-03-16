import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import {useLocation, Link} from 'react-router-dom'
import { useStateContext } from '../context';

export default function Header() {
    const location = useLocation();
    const {show, setShowTasks} = useStateContext()

    return (
        <Wrapper>
            <h1> Task Tracker </h1>  
            {location.pathname === '/' && <Link to='/about'>About</Link>}  
            {location.pathname === '/addTask' && 
            <Button color={show ? 'red' : 'green'} text={show ? 'Close' : 'Add'} showTasks={() => setShowTasks(!show)} />
            }
           
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        font-weight: bold;
    }
`
