import axios from "axios";

const templates = axios.create({
        baseURL: 'https://reqres.in/api/'
    }
);
export const usersAPI = {
    getUsers() { return templates.get(`users?page=1`)
            .then(response => {
                return response.data.data
        });
    },
    deleteUser(id) {return templates.post(`users/${id}`)
            .then(response => {
                return response.data.data
        })
    },
    changeUser(changeContact) {
        return templates.patch(`users/${changeContact.id}`, {changeContact})
            .then(response => {
                return response.data.changeContact
            })
    },
    createUser(newContact) {
        return templates.post('users', {newContact})
            .then(response => {
                newContact.id = response.data.id
                return newContact
            })
    },
    authorizationUser(email, password, date, dateForRegisterUser) {
        return templates.post('register',
            {"email": "eve.holt@reqres.in",
                "password": "cityslicka"}
        )
            .then(response => {
                return response.data
            })
    },
}
