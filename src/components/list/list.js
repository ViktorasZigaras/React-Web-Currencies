// @ts-check

import React, {PureComponent} from 'react';
import './list.scss';
import {connect} from "react-redux";
import onClickSort from './onClickSort.js';
import onDataFetch from './onDataFetch.js';
import * as Actions from '../../actions/index.js';
import {Spinner, Row} from 'reactstrap';

class ListView extends PureComponent {
  /**@param {Object} props*/
  constructor(props) {
    super(props);
    this.state = {
      /**@type string*/ sortDirection: 'asc', 
      /**@type string*/ lastSortColumn: ''
    };
  };

  componentDidMount() {
    /**@type Object*/
    const timerHandler = () => {onDataFetch(this.props);};
    setImmediate(timerHandler, 0);
    setInterval(timerHandler, 10000);
  }

  render() {
    //http://localhost:8080/dist/
    /**@type any[]*/
    const listView = [];
    if (this.props.list) {
      /**@type any[]*/
      const list = [...this.props.list];
      listView.push(
      <div key='header' className="row-mix">
        <div className="cell-mix cell-mix-header" 
          onClick={()=>onClickSort('code', this)}>
          Code</div>
        <div className="cell-mix cell-mix-header" 
          onClick={()=>onClickSort('symbol', this)}>
          Symbol</div>
        <div className="cell-mix cell-mix-header" 
          onClick={()=>onClickSort('rate', this)}>
          Rate</div>
        <div className="cell-mix cell-mix-header" 
          onClick={()=>onClickSort('description', this)}>
          Description</div>
      </div>);

      if (list) {
        /**@type number*/
        let i = 0;
        /**@type string*/
        let symbol;
        list.forEach(/**@param {Object} entry*/(entry) => { 
          i++;
          symbol = entry.symbol;
          listView.push(
            <div key={i} className="row-mix">
              <div className="cell-mix">{entry.code}</div>
              <div className="cell-mix">{symbol}</div>
              <div className="cell-mix">{entry.rate}</div>
              <div className="cell-mix">{entry.description}</div>
            </div>
          );
        });
      }
    }

    /**@type Object*///Element??
    let spinner = '';
    if (this.props.spinnerOn) {spinner = <Spinner color="primary" />;}
      
    return (
      <div>
        <Row>
          <div className="left height">Last updated on: {this.props.updatedOn}</div>
          <div className="left"> {spinner}</div>
        </Row>
        <Row>
          <div className="list-display-section">
            <div className="table-mix">{listView}</div>
          </div>
        </Row>
      </div> 
    );
  }
}

/**@param {Object} dispatch*/
function mapDispatchToProps(dispatch) {
  return {
    /**@type Object*/ setList: /**@param {any[]} item*/ item => dispatch(Actions.setList(item)),
    /**@type Object*/ setUpdated: /**@param {string} item*/ item => dispatch(Actions.setUpdated(item)),
    /**@type Object*/ setSpinner: /**@param {boolean} item*/ (item) => dispatch(Actions.setSpinner(item))
  }
}

/**@param {Object} state*/
const mapStateToProps = state => {
  return {
    /**@type any[]*/ list: state.list,
    /**@type string*/ updatedOn: state.updatedOn,
    /**@type boolean*/ spinnerOn: state.spinnerOn
  }
};

const List = connect(mapStateToProps, mapDispatchToProps)(ListView);
export default List;