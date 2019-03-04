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
            <tr>
              <th> ip-adress </th>
              <th> ip-adress </th>
              <th> ip-adress </th>
              <th> ip-adress </th>
              <th> ip-adress </th>
              <th> ip-adress </th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}

export default QueryHistory;
