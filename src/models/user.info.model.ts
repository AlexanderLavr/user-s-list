export interface user {
    id: number
    first_name: string
    last_name: string
    birth_date: string
    gender: string
    job: string
    biography: string
    is_active: boolean
}
export interface userInfoinitialStateReducer {
    chooseUser: user
}
