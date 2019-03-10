import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import './QueryHistoryComponent.css';

class QueryHistory extends Component {
  render() {
    const { queries } = this.props;
    return (
      <div className="qh--wrapper">
        <table className="qh--table">
          {/* <thead>
            <tr>
              {queries.length > 0 ? Object.getOwnPropertyNames(queries[0]).map(fieldName => (
                <th>{fieldName}</th>
              )): <th />}
            </tr>
          </thead> */}
          <tbody>
            {queries.length > 0 ? queries.map((item, index) => (
              <tr key={index}>
                {Object.getOwnPropertyNames(item).map((fieldName, index) => (<td key={index}>{item[fieldName]}</td>))}
              </tr>
            )):  <td />}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = store => ({ queries: store.queryHistoryState });
export default connect(mapStateToProps)(QueryHistory);
