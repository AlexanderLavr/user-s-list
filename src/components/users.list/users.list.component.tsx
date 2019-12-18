import React from 'react';
import './users.list.scss';
import { connect } from 'react-redux';
import { doUsers, deleteUser } from '../../redux/users.list.redux/users.list.action';
import { Spinner } from 'reactstrap';
import { getUserId } from '../../common/shared/getUserId';
import { userList } from '../../models/user.list.model';
import { doAddUser } from '../../redux/user.add-edit.redux/user.add-edit.action';
import ModalInfo from '../../components/modal.info/moda.info';

class UsersList extends React.Component<any>{
    componentDidMount(){
        this.props.doUsers()
    }
    getUserInfo(e: any){
        const id = getUserId(e.currentTarget.id);
        this.props.history.push(`/user/${id}`)
    }
    deleteUser(e: any){
        e.stopPropagation()
        const id = getUserId(e.currentTarget.id);
        this.props.deleteUser(id)
    }
    addUser(){
        this.props.doAddUser();
        this.props.history.push('./add_user_edit')
    }
    render(){
        if(!this.props.usersList.length){
            return(
                <div className="container-spiner">
                    <Spinner className="spiner" color="dark" />
                </div>
            )
        }else{
            return(
                <div className="container-users-list">
                    <ModalInfo />
                    <h2>User's list</h2>
                    {this.props.usersList.map((user: userList)=>{
                        return(
                            <div className="holder-user" key={`holder${user.id}`}>
                                <div className="item-user" id={`us${user.id}`} onClick={(e)=>this.getUserInfo(e)} key={`item${user.id}`}>        
                                    <div className="user-field" key={`first${user.id}`}>Имя: {user.first_name}</div>
                                    <div className="user-field" key={`last${user.id}`}>Фамилия: {user.last_name}</div>
                                    <div className="user-field" key={`birth${user.id}`}>Дата рождения: {user.birth_date}</div>
                                    <div className="user-field" key={`gender${user.id}`}>Пол: {user.gender}</div>
                                    <div className="item-button-delete" key={`button${user.id}`}>
                                        <button className="button-delete" id={`de${user.id}`} key={`delete${user.id}`} onClick={(e)=>this.deleteUser(e)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="item-button-add">
                        <button className="button-add" onClick={()=>this.addUser()}>Add user</button>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state: any) => ({
    usersList: state.list.usersList
})

export default connect(
    mapStateToProps,
    { doUsers, deleteUser, doAddUser }
)(UsersList)