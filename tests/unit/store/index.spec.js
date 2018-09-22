import { mutations as M } from "../../../src/store/index";
import mocks from "./mocks";

describe("Store/mutations", () => {
  test("addTodo", () => {
    const state = mocks.state.empty();
    const todo = mocks.todo();
    M.addTodo(state, todo);
    expect(state.todos.allIds).toEqual({ [todo.id]: todo });
  });

  test("removeTodo", () => {
    const {
      state,
      todo: { id }
    } = mocks.state.withOneTodo();
    M.removeTodo(state, { id });
    expect(state).toEqual(mocks.state.empty());
  });

  test("updateTodo", () => {
    const { state, todo } = mocks.state.withOneTodo();
    const updatedTodo = { ...todo, favourite: true, body: "new todo body" };
    M.updateTodo(state, updatedTodo);
    expect(state).toEqual(mocks.state.withOneTodo(updatedTodo).state);
  });
});
