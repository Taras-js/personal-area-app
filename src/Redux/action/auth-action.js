import * as types from "../types/types";
import {usersAPI} from "../../API/api";

export const authAction = (email, password, date, dateForRegisterUser) => async dispatch => {
    const response = await usersAPI.authorizationUser(email, password, date, dateForRegisterUser)
    dispatch({ type: types.AUTH_USER, payload: response })
}

