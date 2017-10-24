const deleteUser = (userInfo) => {
  return {
    type: 'deleteUser',
    userInfo
  }
}

export default deleteUser;
