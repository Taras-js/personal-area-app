import * as types from '../types/types'
// import { AuthState } from "../../Interfaces/interface-auth";

const initialState  = {
    isAuth: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_USER:
            return {
                ...state,
                isAuth: true,
            }
        default:
            return state
    }
}