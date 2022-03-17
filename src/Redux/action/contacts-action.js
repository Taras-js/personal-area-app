import * as types from "../types/types";
import {usersAPI} from "../../API/api";

export const setUsers = () => async dispatch => {
    const response = await usersAPI.getUsers()
    dispatch({ type: types.GET_USERS, payload: response })
}

export const removeUser = (id) => async dispatch => {
    await usersAPI.deleteUser(id)
    dispatch({ type: types.DELETE_USER, payload: id})
}

export const updateChangeContact = (changeContact) => async dispatch => {
    const response = await usersAPI.changeUser(changeContact)

    dispatch({ type: types.UPDATE_CHANGE_CONTACT, payload: response})
}

export const createNewContactAC = (newContact) => async dispatch => {
    const response = await usersAPI.createUser(newContact)

    dispatch({type: types.CREATE_NEW_CONTACT, payload: response})
}

export const searchOnLastName = (input_last_name) => dispatch => {
    dispatch({type: types.SEARCH_IN_LAST_NAME, payload: input_last_name.toLowerCase()})
}