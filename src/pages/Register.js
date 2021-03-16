import React, { useState} from 'react';
import styled from 'styled-components';
import {Link, useHistory} from 'react-router-dom'
import {baseUrl, register} from '../constant'
import { useStateContext } from '../context';


export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const {dispatch, isLoading, dbError,} = useStateContext()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!username || username.length < 3){
            setUserError('username must be more than 3 chars')
            return
        }
        if(!password || password.length < 5){
            setPasswordError('password must be more than 5 chars')
            return
        }
        await register(baseUrl, {username, password}, history, dispatch);
    }
    
    return (
        <Wrapper className='register' onSubmit={handleSubmit}>
            <div className='form-control'>
            {dbError && <p className='pp'>{dbError}</p>}
                <label>Username</label>         
                <input 
                type='text'
                value={username}
                placeholder='enter username'
                onChange={e => setUsername(e.target.value)}
                />
                {userError && <p className='pp'>{userError}</p>}
            </div> 
            <div className='form-control'>
                <label>Password</label>
                <input 
                type='password'
                value={password}
                placeholder='enter password'
                onChange={e => setPassword(e.target.value)}
                />
                {passwordError && <p className='pp'>{passwordError}</p>}
            </div> 
            {isLoading ? <p className='load'>loading...</p> :  <input 
            className='btn btn-submit' 
            type='submit' 
            value='register' />}
           
            <p>or <Link to='/login'>Login</Link> to continue</p>
        </Wrapper>
        
    )
}

const Wrapper = styled.form`
    .register {
        margin-bottom: 20px
    }            

    .form-control {
        margin: 20px auto;
    } 

     .form-control label{
        display: flex;
        font-weight: bold;
        align-items: center;
        justify-self: center;
    }

    .form-control input {
        width: 100%;
        height: 40px;
        padding: 3px 7px;
        font-size: 17px;
        margin: 5px;
    }

    .form-control input:focus {
        outline:none;
    }

    .form-control label {
        flex: 2 
    }

    .btn-submit {
        display: block;
        width: 100%
    }

    .pp {
        color: red
    }
    .load {
        text-align: center
    }
`
