import React from 'react';
import './user.add-edit.scss';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { addEditUserModel, validFormModel } from '../../models/add-edit.user.model';
import { validForm } from '../../common/shared/validForm';
import ModalInfo from '../modal.info/moda.info';
import { openModalInfo } from '../../redux/modal.info.redux/modal.info.action';
import { addUser, editUser } from '../../redux/user.add-edit.redux/user.add-edit.action';

class AddEditUser extends React.Component<any>{
    state: addEditUserModel = {
        id: 0,
        first_name: '',
        last_name: '', 
        birth_date: '',
        gender: '',
        job: '',
        biography: '',
        save_birth_date: '',
        is_active: false
    }
    dateChange(date: any){
        if(date){
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            this.setState({ save_birth_date: date, birth_date: `${year}-${month+1}-${day}`})
        }
    }
    changeInput(e: any){
        this.setState({[e.target.name]:e.target.value})
    }
    changeCheckBox(e: any){
        this.setState({[e.target.name]:e.target.checked})
    }
    changeSelect(e: any){
        this.setState({[e.target.name]:e.target.checked})
    }
    addEditUser(){
        const { id, first_name, last_name, gender, job, biography, birth_date, is_active } = this.state;
        const userData = { first_name, last_name, gender, job, biography, birth_date, is_active };
        const valid: validFormModel | undefined = validForm(userData);
        if(this.props.edit){
            return valid.message ? this.props.openModalInfo(valid.message) : this.props.editUser(id, userData, this.props.history)
        }
        return valid.message ? this.props.openModalInfo(valid.message) : this.props.addUser(userData, this.props.history)
    }
    componentDidMount(){
        let { edit, editUserData} = this.props;
        if(edit){
            const { id, first_name, last_name, birth_date, gender, job, biography, is_active } = editUserData;
            const dateArr = birth_date.split('-');
            const year = Number(dateArr[0])
            const month = Number(dateArr[1])
            const day = Number(dateArr[2])
            this.setState({ id, first_name, save_birth_date: new Date(year, month-1, day), last_name, birth_date, gender, job, biography, is_active })
        }
    }
    render(){
        let { edit, editUserData} = this.props;
        return(
            <div className="container-add-edit-user">
                <ModalInfo />
                <h2>{this.props.edit?'Edit': 'Add'} user</h2>
                <label>
                    <input 
                        name="first_name" 
                        placeholder="First Name" 
                        onChange={(e)=>this.changeInput(e)} 
                        value={this.state.first_name}
                    />
                </label>
                <label>
                    <input 
                        name="last_name" 
                        placeholder="Last Name" 
                        onChange={(e)=>this.changeInput(e)} 
                        value={this.state.last_name}
                    />
                </label>
                <DatePicker
                    className="item-date" 
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Choose a date"
                    selected={this.state.save_birth_date}
                    onChange={(date)=>this.dateChange(date)} 
                />
                <select name="gender" 
                onChange={(e)=>this.changeInput(e)} 
                defaultValue={edit? editUserData.gender : this.state.gender}
                >
                    <option value="">Choose a gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <label>
                    <input 
                        name="job" 
                        placeholder="Profession" 
                        onChange={(e)=>this.changeInput(e)} 
                        value={this.state.job}
                    />
                </label>
                <textarea 
                    name="biography" 
                    placeholder="Biography" 
                    onChange={(e)=>this.changeInput(e)} 
                    value={this.state.biography}>      
                </textarea>
                <label className="is_active">
                    <input 
                        name="is_active" 
                        type="checkbox"
                        onChange={(e)=>this.changeCheckBox(e)} 
                        value={this.state.is_active}
                        checked={edit && editUserData.is_active? this.state.is_active: this.state.is_active}
                    />
                    Is active
                </label>
                <div className="item-button-add">
                    <button className="button-add" onClick={()=>{this.addEditUser()}}>{edit?'Edit':'Add'}</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    edit: state.add_edit.edit,
    editUserData: state.add_edit.editUserData
})

export default connect(
    mapStateToProps,
    { openModalInfo, addUser, editUser }
)(AddEditUser)