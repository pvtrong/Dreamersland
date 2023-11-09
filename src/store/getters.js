const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.users.token,
  avatar: state => state.users.avatar,
  name: state => state.users.name,
  currentUser: state => state.users.currentUser,
  isLogin: state => state.users.isLogin,
}
export default getters
