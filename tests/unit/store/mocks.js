const mocks = {
  todo: () => ({
    id: Math.random(),
    body: "do thing",
    favourite: false,
    due: Date.now()
  }),
  state: {
    empty: () => ({ todos: { allIds: {} } }),
    withOneTodo: (todo = mocks.todo()) => {
      const state = {
        todos: { allIds: { [todo.id]: todo } }
      };
      return { state, todo };
    }
  }
};

export default mocks;
