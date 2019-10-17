import Constants from '../constants';

export function setList(payload) {return {type: Constants.SET_LIST, payload}};
export function setUpdated(payload) {return {type: Constants.SET_UPDATED, payload}};
export function setSpinner(payload) {return {type: Constants.SET_SPINNER, payload}};