import { user } from '../../models/user.info.model';
import { request } from '../../request/request';
import { deleteUser } from '../users.list.redux/users.list.action';
import { openModalInfo } from '../modal.info.redux/modal.info.action';

export enum usersInfoType {
    SAVE_CHOOSE_USER = 'SAVE_CHOOSE_USER'
}

export const saveChooseUser = (user: user ) => {
    return { type: usersInfoType.SAVE_CHOOSE_USER, user}
}

export const getUserInfo = (id: number) => {
    return async (dispatch: any) => {
        try{
            const userInfo = await request(`contact/${id}`, 'GET');
            dispatch(saveChooseUser(userInfo))
        }catch(err){
            dispatch(openModalInfo('Something went wrong. Try again later!'))
        }
    }
}

export const deleteUserInfo = (id: number, history: any) => {
    return async (dispatch: any) => {
        await dispatch(deleteUser(id))
        await history.push('/')
        await dispatch(openModalInfo('User deleted successfully!'))
    }
}

