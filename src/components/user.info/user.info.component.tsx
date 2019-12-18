import React from 'react';
import './user.info.scss';
import { connect } from 'react-redux';
import { getUserInfo, deleteUserInfo } from '../../redux/user.info.redux/user.info.action';
import { user } from '../../models/user.info.model';
import { Spinner } from 'reactstrap';
import { getUserId } from '../../common/shared/getUserId';
import { doEditUser } from '../../redux/user.add-edit.redux/user.add-edit.action';

class UserInfo extends React.Component<any>{
    componentDidMount(){
        const id = Number(this.props.match.params.id);
        this.props.getUserInfo(id)
    }
    deleteUser(e: any){
        const id = getUserId(e.currentTarget.id);
        this.props.deleteUserInfo(id, this.props.history)
    }
    editUser(){
        const userData = this.props.chooseUser;
        this.props.doEditUser(userData)
        this.props.history.push('/add_user_edit')
    }
    render(){
        const id = Number(this.props.match.params.id);
        const chooseUser = this.props.chooseUser;
        let chooseUserArr = [];
        if( Object.keys(chooseUser).length && id === chooseUser.id){
            chooseUserArr[chooseUserArr.length] = chooseUser;
            return(
                <div className="container-user-info">
                    <h2>User info</h2>
                    {chooseUserArr.map((user: user)=>{
                        return(
                            <div className="item-user-info" key={`item${user.id}`}>
                                <div className="user-field" key={`first${user.id}`}>Имя: {user.first_name}</div>
                                <div className="user-field" key={`last${user.id}`}>Фамилия: {user.last_name}</div>
                                <div className="user-field" key={`gender${user.id}`}>Пол: {user.gender}</div>
                                <div className="user-field" key={`job${user.id}`}>Профессия: {user.job}</div>
                                <div className="user-field" key={`biography${user.id}`}>Биография: {user.biography}</div>
                                <div className="user-field" key={`active${user.id}`}>Пользователь активен: {user.is_active?'Да':'Нет'}</div>
                                <div key={`button${user.id}`} className="item-button">
                                    <button id={`de${user.id}`} key={`delete${user.id}`} onClick={(e)=>this.deleteUser(e)}>Delete</button>
                                    <button id={`ed${user.id}`} key={`edit${user.id}`} onClick={()=>this.editUser()}>Edit user</button>
                                </div>
                            </div>
                         )
                     })}
                </div>
            )
        }else{
            return(
                <div className="container-spiner">
                    <Spinner className="spiner" color="dark" />
                </div>
            )
        }
    }
}

const mapStateToProps = (state: any) => ({
    chooseUser: state.info.chooseUser
})

export default connect(
    mapStateToProps,
    { getUserInfo, deleteUserInfo, doEditUser }
)(UserInfo)