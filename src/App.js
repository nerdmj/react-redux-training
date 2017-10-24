import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import AddUser from './components/addUser'
import EditUser from './components/editUser'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
            <Router>
              <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/add-user' component={AddUser}/>
                    <Route name="user" path='/edit-info/:uuid' component={EditUser}/>
              </Switch>
            </div>
          </Router>
        </header>

      </div>
    );
  }
}


export default App;
