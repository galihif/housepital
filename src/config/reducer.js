const initialState = {
    isLogged: false,
    userData: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isLogged: true,
                userData: action.userData,
            }
        case "LOGOUT":
            return {
                ...state,
                isLogged: false,
                userData: {},
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