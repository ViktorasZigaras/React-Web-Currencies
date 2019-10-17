// @ts-check
import { ListView } from './list';

/** @param {string} field @param {ListView} parent */
export default function onClickSortHandler(field, parent) {
  /** @type {string} */
  let sortDirection = 'asc';
  /** @type {number} */
  let direction = 1;
  if (parent.state.lastSortColumn === field && parent.state.sortDirection === 'asc') {
    sortDirection = 'desc';
    direction = -1;
  }
  parent.props.list.sort(
    /** @param {Object} a @param {Object} b */
    (a, b) => (a[field] > b[field]) ? direction : -direction
  );
  parent.setState({
    /** @type {string} */ lastSortColumn: field,
    /** @type {string} */ sortDirection: sortDirection
  });
}