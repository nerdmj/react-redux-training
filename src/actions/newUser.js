const newUser = (userInfo) => {
  return {
    type: 'addNewUser',
    userInfo
  }
}

export default newUser;
