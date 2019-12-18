import { usersInfoType } from './user.info.action';

const initialState = {
    chooseUser: {}
}


export function usersInfoReducer (state = initialState, action: any){
    switch(action.type){
        case usersInfoType.SAVE_CHOOSE_USER:
            return{
                ...state,
                chooseUser: action.user
            }
        default: 
            return state
    }
}