import { userAddEditType } from './user.add-edit.action';
import { addEditUserinitialState } from '../../models/add-edit.user.model';

const initialState: addEditUserinitialState = {
    edit: false,
    editUserData: {}
}


export function usersAddEditReducer (state = initialState, action: any){
    switch(action.type){
        case userAddEditType.DO_ADD_USER:
            return{
                ...state,
                edit: false,
                editUserData: {}
            }
        case userAddEditType.DO_EDIT_USER:
            return{
                ...state,
                edit: true,
                editUserData: action.user
            }
        case userAddEditType.END_EDIT_USER:
            return{
                ...state,
                state: initialState
            }
        default: 
            return state
    }
}