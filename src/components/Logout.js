import React from 'react'
import { useStateContext } from '../context'
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'

function Logout() {
    const {user, dispatch} = useStateContext()
    const history = useHistory()

    const handleLogout = () => {
        localStorage.clear()
        dispatch({type: 'logout'})
        history.push('/')
    }

    return (
        user ?
        <Wrapper>
            <button onClick={handleLogout}>Logout</button>
        </Wrapper> : null
    )
}

export default Logout

const Wrapper = styled.div`
   text-align: center;
    
    button {
        background :#ccc;
        color: #fff;
        padding: 15px 20px;
        outline: none;
        text-decoration: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
        margin: 5px;
        border-radius: 5px;
    }
`

