import { login, logout, getInfo } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    isLogin: false,
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_CURRENT_USER: (state, currentUser) => {
    state.currentUser = currentUser
  },
  SET_IS_LOGIN: (state, isLogin) => {
    state.isLogin = isLogin;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { phone_number, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ phone_number, password })
        .then((response) => {
          const { data } = response;
          commit('SET_TOKEN', data.token);
          setToken(data.token);
          commit('SET_IS_LOGIN', true);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((response) => {
          const { data } = response;
          if (!data) {
            return reject('Verification failed, please Login again.');
          }

          const { currentUser } = data;

          commit('SET_NAME', currentUser.first_name + ' ' + currentUser.last_name);
          commit('SET_CURRENT_USER', currentUser)
          // commit('SET_AVATAR', avatar)
          commit('SET_IS_LOGIN', true);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    removeToken(); // must remove  token  first
    resetRouter();
    commit('RESET_STATE');
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit('RESET_STATE');
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
