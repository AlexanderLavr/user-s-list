import { usersListType } from './users.list.action';
import { usersListInitialState } from '../../models/user.list.model';


const initialState: usersListInitialState = {
    usersList: []
}


export function usersListReducer (state = initialState, action: any){
    switch(action.type){
        case usersListType.SAVE_USERS_LIST:
            return{
                ...state,
                usersList: action.userArray
            }
        case 'usersListType.SAVE_USERS_LIST':
            return{
                ...state,
                usersList: action.userArray
            }
        default: 
            return state
    }
}