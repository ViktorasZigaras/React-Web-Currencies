// @ts-check
import * as Constants from "../constants/action-types.js";

/**@type Object*/
const initialState = {
    /**@type Object[]*/
    list: [],
    /**@type string*/
    updatedOn: '',
    /**@type boolean*/
    spinnerOn: false
};
 
/**@param {Object} state @param {Object} action*/
function rootReducer(state = initialState, action) {
    if (action.type === Constants.SET_LIST) {return Object.assign({}, state, {list: action.payload});}
    if (action.type === Constants.SET_UPDATED) {return Object.assign({}, state, {updatedOn: action.payload});}
    if (action.type === Constants.SET_SPINNER) {return Object.assign({}, state, {spinnerOn: action.payload});}
    else {return state;}
};

export default rootReducer;