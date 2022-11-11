import { regAction } from "./lib";

regAction("increment", (state, val) => ({
  state: {
    ...state,
    counter: state.counter + 1
  },
  dispatch: [["incrementSecondary", val]]
}));

regAction("decrement", (state, val) => ({
  state: {
    ...state,
    counter: state.counter - 1
  },
  dispatch: [["decrementSecondary", val]]
}));

regAction("incrementSecondary", (state, val) => ({
  state: {
    ...state,
    secondCounter: state.counter + val,
    thirdCounter: state.counter * 2
  }
}));

regAction("decrementSecondary", (state, val) => ({
  state: {
    ...state,
    secondCounter: state.counter - val,
    thirdCounter: state.counter * 2
  }
}));

regAction("fetchPosts", (state, _) => ({
  state: {
    ...state,
    loadingPosts: true
  },
  axios: {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    onSuccess: ["postsLoaded"],
    onFailure: ["postsRequestFailed"]
  }
}));

regAction("postsLoaded", (state, data) => ({
  state: {
    ...state,
    loadingPosts: false,
    posts: data
  }
}));
