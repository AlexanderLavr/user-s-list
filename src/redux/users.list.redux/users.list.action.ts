import { request } from '../../request/request';
import { userList } from '../../models/user.list.model';
import { openModalInfo } from '../modal.info.redux/modal.info.action';

export enum usersListType {
    SAVE_USERS_LIST = 'SAVE_USERS_LIST'
}

const saveUsersList = (userArray: userList[]) => {
    return { type: usersListType.SAVE_USERS_LIST, userArray }
}

export const doUsers = () => {
    return async (dispatch: any) => {
        try{
            let usersList = await request('contact/', 'GET')
            if(usersList.length){
                dispatch(saveUsersList(usersList))
            }
        }catch(err){
            dispatch(openModalInfo('Something went wrong. Try again later!'))
        }
    }
}

export const deleteUser = (id: number) => {
    return async (dispatch: any) => {
        try{
            await request(`contact/${id}`, 'DELETE')
            dispatch(doUsers())
        }catch(err){
            dispatch(openModalInfo('Something went wrong. Try again later!'))
        }
    }
}