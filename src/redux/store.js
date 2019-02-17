import { createStore } from "react-redux";

const initState = {
  todos: [],
  posts: []
};

function myReducer(state = initState, action) {
  if (action.type == "ADD_TODO") {
    return {
      todos: [...state.todos, action.todo]
    };
  }
}

const store = createStore(myReducer);

//This is typically done in various Components allowing them to react to
// state changes. This method fires each time the store changes state.
store.subscribe(() => {
  console.log("state updated", store.getState());
});

const todoAction = { type: "ADD_TODO", todo: "buy milk" };

store.dispatch(todoAction);
