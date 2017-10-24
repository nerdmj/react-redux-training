import React, { Component } from 'react'
import '../App.css';
import store from '../store'
import newUser from '../actions/newUser'
import { Redirect } from 'react-router'
import {
  Link
} from 'react-router-dom'


class AddUser extends Component {

  constructor(){
    super()
    this.state={
      'name':'',
      'username':'',
      'email':'',
      'msg':'',
      'redirect': false
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
      let newInfo = {'name' : name, 'username': username, 'email' : email}
      store.dispatch(newUser(newInfo));
      this.setState({
        'msg': 'New user entry added.',
        'name':'',
        'username':'',
        'email':'',
        'redirect': true
      })
    }
  }

  render(){
    const {name, username, email, msg, redirect } =  this.state;

    if (redirect) {
     return <Redirect to='/'/>;
    }

    return(
          <div className="new-entry">
            <h1 className="App-title">Add New User</h1>
           <div className="new-user-form">
             <Link to="/" id="home">Back 2 Home</Link>
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

export default AddUser;
