import React, { useState, useContext, useReducer } from 'react'
import { reducer } from './reducer';
import axios from 'axios'
import {baseUrl} from './constant';

const initialState = {
    tasks : [],
    user: {},
    isAuthenticated: false,
    dbError: '',
    taskError:'',
    isLoading: false
} 

const stateContext = React.createContext()

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShowTasks] = useState(true);
  const {tasks} = state

const fetchTasks = async () => {
    const token = localStorage.getItem('token')
    await axios.get(`${baseUrl}/auth/task`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
      dispatch({type: 'tasks', payload: response.data})})
    .catch(e => e.response && e.response.data ? dispatch({type:'taskError', payload: e.response.data.message}): '' )
 }

  const deleteTask = async (_id) => {
    const token = localStorage.getItem('token')
    await axios.delete(`${baseUrl}/task/${_id} `, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const newTasks = tasks?.filter(task => task._id !== _id)
    dispatch({ type: 'tasks', payload: newTasks})
  } 

  const toggleReminder = async (_id) => {
    const token = localStorage.getItem('token')
    const data = await axios.get(`${baseUrl}/task/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data);
    await axios.put(`${baseUrl}/task/${_id}`, { reminder: !data.reminder }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const newTasks = tasks?.map((task) => task._id === _id ? {...task, reminder: !task.reminder} : task);
    dispatch({ type: 'tasks', payload: newTasks})
  }

  const addTask = async (task) => {
    dispatch({type: 'loading'})
    const token = localStorage.getItem('token')
    const response = await axios.post(`${baseUrl}/task`, {...task}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data);
    dispatch({type:'addTask', payload: response});
  }

  
  return (
    <stateContext.Provider value={{...state, show, setShowTasks, fetchTasks, addTask,deleteTask, toggleReminder, dispatch}}>{children}</stateContext.Provider>
  )
}

export const useStateContext = () => {
  return useContext(stateContext)
}
