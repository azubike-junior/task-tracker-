import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function About() {
    return (
        <Wrapper>
        <h4>Version 1.0.0</h4>
        <p><Link  to='/'>Go back</Link></p>
         </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
    a {
        text-decoration: none;
    }

`

