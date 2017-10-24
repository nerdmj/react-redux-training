const editUser = (updatedInfo) => {
  return {
    type: 'editUser',
    updatedInfo: updatedInfo
  }
}

export const getUserInfo = (updatedInfo) => {
  return {
    type: 'getUserInfo',
    updatedInfo: updatedInfo
  }
}

export default editUser;
