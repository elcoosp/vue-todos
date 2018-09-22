import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {};

const actions = {};

export const mutations = {
  addTodo: (state, todo) => (state.todos.allIds[todo.id] = todo),
  removeTodo: (state, { id }) => delete state.todos.allIds[id],
  updateTodo: (state, { id, ...update }) =>
    Object.entries(update).forEach(
      ([key, value]) => (state.todos.allIds[id][key] = value)
    )
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
