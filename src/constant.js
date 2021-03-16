import axios from 'axios'

export const baseUrl = `https://task-tracker-app-v1.herokuapp.com`

export const register = async (baseUrl, data, history, dispatch) => {
    dispatch({type:'loading'})
    await axios.post(`${baseUrl}/auth`, data)
    .then(response => {
        localStorage.setItem('token', response.data)
        dispatch({type:'success', payload: response.data})
        history.push('/addTask')
    })
    .catch(e => e.response && e.response.data ? dispatch({type:'dbError', payload: e.response.data.message}): '')
}

export const login = async (baseUrl, data, history, dispatch) => {
    dispatch({type:'loading'})
    await axios.post(`${baseUrl}/auth/login`, data)
    .then(response => {
        localStorage.setItem('token', response.data)
        dispatch({type:'success',  payload: response.data})
        history.push('/addTask')
    })
    .catch(e => e.response && e.response.data ? 
        dispatch({type:'dbError', payload: e.response.data.message}): '')
    };