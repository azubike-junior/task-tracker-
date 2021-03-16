import React, { useState } from 'react'
import styled from  'styled-components'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { useStateContext } from '../context';
import {baseUrl, login} from '../constant'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const history = useHistory();
    const {dispatch, dbError, isLoading} = useStateContext()

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
        await login(baseUrl, {username, password}, history, dispatch);
    }

    return (
        <Wrapper className='login' onSubmit={handleSubmit}>
            {dbError && <p className='pp'>{dbError}</p>}
            <div className='form-control'>
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
            value='Login To Add Task' />}
            <p>dont have an account? <Link to='/register'>register</Link></p>
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
        text-align: center;
    }
`

