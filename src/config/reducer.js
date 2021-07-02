const initialState = {
    isLogged: false,
    userRole: "",
    user: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isLogged: true,
                user: action.user,
                userRole: action.userRole
            }
        case "LOGOUT":
            return {
                ...state,
                isLogged: false,
                user: {},
                userRole:""
            }
        case "changeUserName":
            return {
                ...state,
                user: action.user
            }
        case "RESET":
            return initialState
        default: 
        return state
    }
}

export default rootReducer