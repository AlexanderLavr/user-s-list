export interface addEditUserinitialState {
    edit: boolean
    editUserData: object
}
export interface addEditUserModel {
    id: number
    first_name: string
    last_name: string
    birth_date: any
    gender: string
    job: string
    biography: string
    save_birth_date: any
    is_active: any
}

export interface validFormModel {
    message: string 
}
