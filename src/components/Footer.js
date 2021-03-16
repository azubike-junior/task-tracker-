import React from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import styled from 'styled-components'

export default function Footer() {
    const location = useLocation()
    
    return (
        <Wrapper>
            {location.pathname === '/about' || 'addTask' ? '' : (<Link to='/about'>About</Link>)}
            <p>Copyright &copy; 2021</p>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .tag {
        display: flex;
        font-weight: bold;
        color: 000;
        cursor:pointer;
    }

    a {
        text-decoration: none;

    }


`

