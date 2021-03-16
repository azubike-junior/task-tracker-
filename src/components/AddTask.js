import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { useStateContext } from '../context';


export default function AddTask() {

    const [text, setText] = useState('');
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false);
    const [error, setError] = useState('')

    const {show, addTask, isLoading } = useStateContext()

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            setError('task input cannot be empty');
            return
        }
        if(!day){
            setError('day input cannot be empty');
            return
        }
        addTask({text, day, reminder });
        setText('');
        setDay('');
        setReminder(false)
        setError('')
    }
    
    return (
        show &&
        (<Wrapper className='add-from' onSubmit={handleSubmit} >
            {error && (<h5 style={{color:'red'}}>{error}</h5>)}
                <div className='form-control'>
                    <label>Task</label>
                    <input 
                    type='text'
                    placeholder='add task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Date & time</label>
                    <input 
                    type='text' 
                    placeholder='feb, 5th of march'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    />
                </div>
                <div className='form-control form-control-box'>
                    <label> set reminder</label>
                    <input 
                    type='checkbox'
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    />

                </div>
                {isLoading ? <p className='load'>submitting...</p>: <input className='btn btn-submit' type='submit' value='Save Task' />}
                
        </Wrapper> )
    )
}

const Wrapper = styled.form` 
    .add-form {
        margin-bottom: 20px;
    }

    .form-control {
        margin: 20px auto;
    } 

    .form-control label{
        display: flex;
        font-weight: bold;
    }

    .form-control input {
        width: 100%;
        height: 40px;
        padding: 3px 7px;
        font-size: 17px;
        margin: 5px;
    }

    .form-control-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .form-control input:focus {
        outline:none;
    }

    .form-control-box label {
        flex: 1
    }

     .form-control-box input {
        flex: 2;
        height: 20px;
    }
    .btn-submit {
        display: block;
        width: 100%
    }
    .load {
        text-align: center;
    }
`