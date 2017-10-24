const userIntialState = {
  uuid:3,
  loading: false,
  apidata:false,
  list: [
    {
      'uuid': 1,
      'name': 'manish',
      'username':'mj',
      'email': 'manish.jatwani@tothenew.com'
    },
    {
      'uuid':2,
      'name': 'alok',
      'username':'alk',
      'email': 'alok@tothenew.com'
    }
  ]
}

const userReducer = (state = userIntialState, action) => {
  switch (action.type) {
    case 'showList': {
      // console.log(...action.users);
      let i = state.uuid;
      const users = [...action.users];
      users.map((user) =>
        user.uuid = i++
      )
      state.uuid = i;
      // console.log(users);
      const newList = [...state.list, ...users];
      state.apidata = true;
      return { ...state, list: newList };
    }
    case 'addNewUser': {
      console.log(state);
      action.userInfo.uuid = state.uuid++;
      const newList = [...state.list, action.userInfo];
      return {...state, list: newList}
    }
    case 'deleteUser': {
      var users = [...state.list];
      for (var i = 0; i < users.length; i++)
          if (users[i].uuid && users[i].uuid === action.userInfo) {
              users.splice(i, 1);
              break;
          }
      return { ...state, list: users };
    }
    case 'editUser': {
      var users = [...state.list];
       console.log(action.updatedInfo);
      for (var i = 0; i < users.length; i++)
          if (users[i].uuid && users[i].uuid == action.updatedInfo.uuid) {
              users.splice(i, 1, action.updatedInfo);
              break;
          }
      return { ...state, list: users };
    }
    case 'getUserInfo': {
      var allUsers = [...state.list];
      for (var i = 0; i < allUsers.length; i++){
        console.log(allUsers[i].uuid + action.userID );
          if (allUsers[i].uuid && allUsers[i].uuid == action.userID) {
            // console.log( allUsers[i])
                    return  allUsers[i];
          }
        }
        break;
      }
    default: {
      return state;
    }
  }
}

export default userReducer;
