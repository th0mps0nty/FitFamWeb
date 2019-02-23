import { createStore } from "react-redux";

const initState = {
  todos: [],
  posts: []
};

function myReducer(state = initState, action) {
  if (action.type == "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    };
  }
  if (action.type == "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, action.post]
    };
  }
}

const store = createStore(myReducer);

//This is typically done in various Components allowing them to react to
// state changes. This method fires each time the store changes state.
store.subscribe(() => {
  console.log("state updated", store.getState());
});

store.dispatch({ type: "ADD_TODO", todo: "buy milk" });
store.dispatch({ type: "ADD_TODO", todo: "sleep some more" });
store.dispatch({ type: "ADD_POST", post: "Egg Hunt with Yoshi" });
