// @ts-check
import Constants from "../constants";

const initialState = {
  /** @type {Object[]} */
  list: [],
  /** @type {string} */
  updatedOn: '',
  /** @type {boolean} */
  spinnerOn: false
};
 
/** @param {Object} state @param {Object} action */
export default function appReducer(state = initialState, action) {
  if (action.type === Constants.SET_LIST) {
    return Object.assign({}, state, {list: action.payload});
  }
  else if (action.type === Constants.SET_UPDATED) {
    return Object.assign({}, state, {updatedOn: action.payload});
  }
  else if (action.type === Constants.SET_SPINNER) {
    return Object.assign({}, state, {spinnerOn: action.payload});
  }
  else {return state;}
};