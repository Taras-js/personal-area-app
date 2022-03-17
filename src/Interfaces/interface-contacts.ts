export  interface ContactsState {
    users: Array<user>

}
interface user {

    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string

}