import { useDispatch as useReduxDispatch } from "react-redux";

export const ACTIONS = {};

export const useDispatch = () => {
  const dispatch = useReduxDispatch();

  return (type, payload) => dispatch({ type, payload });
};

export const regAction = (type, callback) => {
  Object.assign(ACTIONS, { [type]: callback });
  console.log("regAction", type, callback);
};
