import { Reducer, combineReducers } from 'redux';
import { usersListReducer } from './users.list.redux/users.list.reducer';
import { usersInfoReducer } from './user.info.redux/user.info.reducer';
import { usersAddEditReducer } from './user.add-edit.redux/user.add-edit.reducer';
import { modalInfoReducer } from './modal.info.redux/modal.info.reducer';


const rootReducer: Reducer = combineReducers<any>({
    list: usersListReducer,
    info: usersInfoReducer,
    add_edit: usersAddEditReducer,
    modalInfo: modalInfoReducer
});

export default rootReducer