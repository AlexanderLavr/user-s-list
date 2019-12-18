import { modalInfoType } from './modal.info.action';
import { initialStateModalInfo } from '../../models/modal.info.model';

const initialState: initialStateModalInfo = {
    open: false,
    text: ''
}


export function modalInfoReducer (state = initialState, action: any){
    switch(action.type){
        case modalInfoType.OPEN_MODAL_INFO:
            return{
                ...state,
                open: true,
                text: action.message
            }
        case modalInfoType.CLOSE_MODAL_INFO:
            return{
                ...state,
                open: false,
                text: ''
            }  
        default:    
            return state
    }
}