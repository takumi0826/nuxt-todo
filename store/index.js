export const strict = false;
import firebase from "firebase";

export const state = () => ({
  loginUser: null
});
export const mutations = {
  setUser(state, user) {
    state.loginUser = user;
  },
  deleteUser(state) {
    state.loginUser = null;
  }
};
export const actions = {
  setUser({ commit }, user) {
    commit("setUser", user);
  },
  deleteUser({ commit }) {
    commit("deleteUser");
  },
  login() {
    const google_auth_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(google_auth_provider);
  },
  logout() {
    firebase.auth().signOut();
  }
};
