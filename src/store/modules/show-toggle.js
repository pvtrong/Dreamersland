const getDefaultState = () => {
  return {
    isShowTogglePC: false,
    isShowToggleMobile: false,
  };
};

const state = getDefaultState();

const mutations = {
  SET_SHOW_TOGGLE_PC: (state, isShowTogglePC) => {
    state.isShowTogglePC = isShowTogglePC;
  },
  SET_SHOW_TOGGLE_MOBILE: (state, isShowToggleMobile) => {
    state.isShowToggleMobile = isShowToggleMobile;
  },
};

const actions = {
  changeShowTogglePc({ commit }, isShowTogglePC) {
    commit('SET_SHOW_TOGGLE_PC', isShowTogglePC);
  },
  changeShowToggleMobile({ commit }, isShowToggleMobile) {
    commit('SET_SHOW_TOGGLE_MOBILE', isShowToggleMobile);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
