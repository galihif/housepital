const initialState = {
    isLogged: false,
    userRole: "",
    userData: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isLogged: true,
                userData: action.userData,
                userRole: action.userRole
            }
        case "LOGOUT":
            return {
                ...state,
                isLogged: false,
                userData: {},
                userRole:""
            }
        case "changeUserName":
            return {
                ...state,
                userData: action.userData
            }
        case "RESET":
            return initialState
        default: 
        return state
    }
}

export default rootReducer