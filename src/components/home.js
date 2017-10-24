import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'

import store from '../store'
import User from './users'
import userList from '../actions/userList'

class Home extends Component{

  // componentDidMount(){
  //   // Make a request for a users list
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(function (response) {
  //       store.dispatch(userList(response.data))
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  render(){
    // console.log(this.props);
    const { list } = this.props.users;
      if(list === 0){
        return(
          <div className="loading-data">
            <span>Loading Users...</span>
          </div>
        )
      }else{
        return(
      <div>
        <h1 className="App-title">User Listing with React & Redux</h1>
        <Link to="/add-user" id="new-data">Add New Entry</Link>

        <table>
              <tbody>
                <tr>
                    <th>UUID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  {
                    list.map((item) =>
                      <User key={item.uuid} data={item} />
                    )
                  }
                </tbody>
          </table>
      </div>
    )
    }
  }
}

const mapStateToProps = state => {
  return {
    users : state.users
  }
}

const homeContainer = connect(mapStateToProps)(Home);

export default homeContainer;
