export default {
  getUsername: state => state.userState.userName,
  errors: state => state.errors
}
// function IsLogin () {
//   let istokenset = localStorage.getItem('token')
//   istokenset = localStorage.getItem('token') === null ? null : localStorage.getItem('token')

//   return istokenset
// }
