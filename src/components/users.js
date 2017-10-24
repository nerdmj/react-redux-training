import React, { Component } from 'react';
import store from '../store'
import deleteUser from '../actions/deleteUser'
// import { Redirect } from 'react-router'
import {
  Link
} from 'react-router-dom'

class User extends Component{

  deleteRow(index) {
     var users = [...this.state.users.list];
     users.splice(index, 1);
     this.setState({users});
   }

  render(){
    // console.log(this.props);
    const { uuid, name, username, email = 'abc@xyz.com' } = this.props.data;

    return(
      <tr key={uuid}>
          <td>{uuid}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td><EditButton uuid={uuid} username={username}  /></td>
          <td> <DeleteButton uuid={uuid} username={username} /> </td>
      </tr>
    )
  }
}

class DeleteButton extends Component{

  deleteThis(userInfo){
    // console.log(userInfo);
    // console.log(store);
    store.dispatch(deleteUser(userInfo));
  }

  render(){
    return(
      <button onClick={() => { this.deleteThis(this.props.uuid) }}>Delete</button>
    )
  }
}

class EditButton extends Component{

  render(){
    return(
      <Link to={`/edit-info/${this.props.uuid}`}>Update</Link>
    )
  }
}



export default User;
