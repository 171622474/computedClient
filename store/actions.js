export default {
    setToken({ commit }, token = '') {
      localStorage.setItem('token', token);
      commit(setToken, token);
    },
  };
  