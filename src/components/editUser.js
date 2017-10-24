import React, { Component } from 'react'
import '../App.css';
import store from '../store'
import editUser from '../actions/editUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
  Link
} from 'react-router-dom'

class EditUser extends Component {

  constructor(props){
    super(props);
    if(this.props.match.params && this.props.match.params.uuid){
        let editUser = this.props.match.params.uuid;
        let dataToShow = this.props.getUserInfo(editUser);
        var allUsers = this.props.users.list;
        for (var i = 0; i < allUsers.length; i++){
            if (allUsers[i].uuid && allUsers[i].uuid == editUser) {
              this.state={
                'name':allUsers[i].name,
                'username':allUsers[i].username,
                'email':allUsers[i].email,
                'msg':'',
                'redirect': false
              }
            }
          }
    }
  }

  inputChanged(e){
    let state = {}
    state[e.target.name] = e.target.value;
    this.setState(state)
  }

  handleSubmitted(e){
    //console.log(store)
    e.preventDefault();
    const {name, username, email } =  this.state;

    if(!name || !username || !email ){
      this.setState({'msg':'All Fields are required!!!'})
    }
    else{
      let editInfo = {
        'name' : name,
        'username': username,
        'email' : email,
        'uuid' : this.props.match.params.uuid
      }
      store.dispatch(editUser(editInfo));
      this.setState({
        'msg': 'User Information updated.',
        'name':'',
        'username':'',
        'email':'',
        'redirect': true
      })
    }
  }

  render(){

    // console.log(this.props.match.params.uuid);
    const {name, username, email, msg, redirect } =  this.state;

    if (redirect) {
     return <Redirect to='/'/>;
    }

    return(
          <div className="new-entry">
            <h1 className="App-title">Update User Information</h1>
           <div className="new-user-form">
             <Link to="/" id="home">Back 2 Home</Link>
             <h3>Update Information</h3>
             <form>
               <span className="notification"> {msg} </span>

              <label>
                <span>Name: </span>
                <input type="text" name="name" value={name} onChange={(e) => this.inputChanged(e)} />
              </label>

              <label>
                  <span>Username: </span>
                <input type="text" name="username" value={username} onChange={(e) => this.inputChanged(e)} />
              </label>

              <label>
                  <span>Email: </span>
                <input type="text" name="email" value={email} onChange={(e) => this.inputChanged(e)} />
              </label>

              <input type="button" value="Submit" onClick={(e) => this.handleSubmitted(e)} />
             </form>
           </div>
         </div>
    )

  }

}

const mapStateToProps = state => {
  return {
    users : state.users
  }
}

const mapDispatchToProps = dispatch => {
    return{
        getUserInfo: (userID) => {dispatch(editUser(userID))}
    }
}

const EditUserContainer = connect(mapStateToProps, mapDispatchToProps)(EditUser);

export default EditUserContainer;
