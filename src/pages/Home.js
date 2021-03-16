import React from 'react'
import{Link} from 'react-router-dom'
import styled from 'styled-components';

function Home() {
    return (
        <Wrapper>
            <p>Welcome, thanks for using this app</p> 
           <Link to={'/login'}><button>Login</button> </Link>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    margin: 20px;
    text-align: center;
    p {
        text-align: center;
        font-size: 15px;
        margin-bottom: 30px;
    }
    button {
        padding: 10px 20px;
        text-decoration: none;
        display: inline-block;
        background: #000;
        color: #fff;
        border:none;
        margin: 5px;
        cursor: pointer;
        border-radius: 5px;

        a {
        text-align: center;
        text-decoration: none;
        color: #fff;
    }
    }

    
`
