import React, {useEffect} from 'react'
import { FaTimes } from 'react-icons/fa'
import { useStateContext } from '../context'

export default function Task({_id, text, day, reminder}) {
    const {toggleReminder, deleteTask, fetchTasks} = useStateContext();

    useEffect(() => {
        fetchTasks()
    }, [])
    return (
        <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(_id)}>
            <h3>{text} <FaTimes style={{color:'red', cursor: 'pointer'}}  onClick={() => deleteTask(_id)}/> </h3> 
            <p>{day}</p>
        </div>
    )
}
