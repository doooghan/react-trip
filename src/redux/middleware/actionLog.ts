import { Middleware } from "redux";

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log("state form", store.getState());
  console.log("action", action);
  next(action);
  console.log("state to", store.getState());
};
