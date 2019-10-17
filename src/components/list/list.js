// @ts-check

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Spinner, Row } from 'reactstrap';
import './list.scss';
import Actions from '../../redux/actions';
import onClickSort from './onClickSort';
import onDataFetch from './onDataFetch';

export class ListView extends PureComponent {
  /** @param {Object} props */
  constructor(props) {
    super(props);
    this.state = {
      /** @type {string} */ sortDirection: 'asc', 
      /** @type {string} */ lastSortColumn: ''
    };
  };

  componentDidMount () {
    const timerHandler = () => onDataFetch(this.props);
    setImmediate(timerHandler, 0);
    this.interval = setInterval(timerHandler, 10 * 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render() {
    //http://localhost:8080/dist/
    /** @type {any[]} */
    const listView = [];
    if (this.props.list) {
      /** @type {any[]} */
      const list = [...this.props.list];
      listView.push(
        <div key='header' className="row-mix">
          <div className="cell-mix cell-mix-header" 
            onClick={() => onClickSort('code', this)}>Code</div>
          <div className="cell-mix cell-mix-header" 
            onClick={() => onClickSort('symbol', this)}>Symbol</div>
          <div className="cell-mix cell-mix-header" 
            onClick={() => onClickSort('rate', this)}>Rate</div>
          <div className="cell-mix cell-mix-header" 
            onClick={() => onClickSort('description', this)}>Description</div>
        </div>
      );

      if (list) {
        /** @type {number} */
        let i = 0;
        list.forEach((entry) => { 
          i++;
          listView.push(
            <div key={i} className="row-mix">
              <div className="cell-mix">{entry.code}</div>
              <div className="cell-mix">{entry.symbol}</div>
              <div className="cell-mix">{entry.rate}</div>
              <div className="cell-mix">{entry.description}</div>
            </div>
          );
        });
      }
    }

    /** @type {JSX.Element | ''} *///??
    const spinner = this.props.spinnerOn ? <Spinner color="primary" /> : '';
      
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

/** @param {Object} dispatch */
function mapDispatchToProps(dispatch) {
  return {
    setList: /** @param {any[]} item */ (item) => dispatch(Actions.setList(item)),
    setUpdated: /** @param {string} item */ (item) => dispatch(Actions.setUpdated(item)),
    setSpinner: /** @param {boolean} item */ (item) => dispatch(Actions.setSpinner(item))
  }
}

/** @param {Object} state */
const mapStateToProps = (state) => {
  return {
    /** @type {any[]} */ list: state.list,
    /** @type {string} */ updatedOn: state.updatedOn,
    /** @type {boolean} */ spinnerOn: state.spinnerOn
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);