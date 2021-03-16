import React from 'react'

export default function Button({color, text, showTasks}) {
   
    return (
        <button  className='btn' style={{background: color}} onClick={showTasks}> {text} </button>
    )
}
