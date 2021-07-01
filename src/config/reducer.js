const initialState = {
    isLogged: false,
    userRole: "",
    patientData: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isLogged: true,
                patientData: action.patientData,
                userRole: action.userRole
            }
        case "LOGOUT":
            return {
                ...state,
                isLogged: false,
                patientData: {},
                userRole:""
            }
        case "changeUserName":
            return {
                ...state,
                patientData: action.patientData
            }
        default: 
        return state
    }
}

export default rootReducer