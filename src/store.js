import { createStore, applyMiddleware } from "redux";
import axios from "axios";

import { ACTIONS } from "./lib";
import "./actions";

const initalState = {
  counter: 0,
  secondCounter: 0,
  thirdCounter: 0
};

function reducer(state = initalState, action) {
  const eventCb = ACTIONS[action.type];
  console.log("Reducer triggered:", action);
  if (!eventCb) {
    return state;
  }

  const result = eventCb(state, action.payload);

  return result.state;
}

const customMiddleWare = (_store) => (next) => (action) => {
  next(action);
  console.log("Middleware triggered:", action);
  const eventCb = ACTIONS[action.type];

  if (eventCb) {
    const result = eventCb(_store.getState(), action.payload);
    (result.dispatch ?? []).forEach(([type, payload]) => {
      _store.dispatch({ type, payload });
    });

    if (result.axios) {
      axios(result.axios).then((resp) => {
        _store.dispatch({
          type: result.axios.onSuccess[0], // FIXME
          payload: resp.data
        });
      });
    }
  }
};

export const store = createStore(reducer, applyMiddleware(customMiddleWare));
