import { user } from '../../models/user.info.model';
import { request } from '../../request/request';
import { doUsers } from '../users.list.redux/users.list.action';
import { openModalInfo } from '../modal.info.redux/modal.info.action';


export enum userAddEditType {
    DO_ADD_USER = 'DO_ADD_USER',
    DO_EDIT_USER = 'DO_EDIT_USER',
    END_EDIT_USER = 'END_EDIT_USER'
}

export const doAddUser = () => {
    return { type: userAddEditType.DO_ADD_USER }
}

export const doEditUser = (user: user) => {
    return { type: userAddEditType.DO_EDIT_USER, user }
}

export const endEditUser = () => {
    return { type: userAddEditType.END_EDIT_USER }
}

export const addUser = (user: user, history: any) => {
    return async (dispatch: any) => {
        try{
            await request('contact/', 'POST', user)
            await dispatch(doUsers())
            await dispatch(openModalInfo('User added successfully!'))
            await history.push('./')
        }catch(err){
            dispatch(openModalInfo('Something went wrong. Try again later!'))
        }
    }
}

export const editUser = (id: number, user: user, history: any) => {
    return async (dispatch: any) => {
        try{
            await request(`contact/${id}`, 'PUT', user)
            await dispatch(doUsers())
            await dispatch(endEditUser())
            await dispatch(openModalInfo('User updated successfully!'))
            await history.push('./')
        }catch(err){
            dispatch(openModalInfo('Something went wrong. Try again later!'))
        }
    }
}
