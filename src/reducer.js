export const reducer =  (state, action) => {
    switch(action.type){
       case 'success':
           return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
           }
        case 'dbError':
            return {
                ...state,
                dbError: action.payload,
                isAuthenticated: false,
                isLoading: false
            }
        case 'loading':
            return {
                ...state,
                isLoading: true
            }
        case 'logout':
            return {
                ...state,
                user: '',
                isAuthenticated: false
            }
        case 'tasks': 
            return {
                ...state,
                tasks: action.payload,
                isLoading: false
            }
        case 'addTask':
            console.log('=====action', action.payload)
            return {
                ...state,
                isLoading: false,
                tasks: [...state.tasks, action.payload]
            }
        case 'deleteTask':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default: 
           return {state}
    }
}