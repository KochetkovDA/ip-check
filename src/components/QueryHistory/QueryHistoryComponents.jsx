import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QueryHistoryComponent.css';

class QueryHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="qh--wrapper"> 
        <table className="qh--table">
          <thead>
            <th> ip-adress </th>
            <th> ip-adress </th>
            <th> ip-adress </th>
            <th> ip-adress </th>
            <th> ip-adress </th>
            <th> ip-adress </th>
          </thead>
        </table>
      </div>
    );
  }
}

export default QueryHistory;
