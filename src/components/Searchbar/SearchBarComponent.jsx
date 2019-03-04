import React, { Component } from 'react';
import './SearchBarComponent.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeSearchQuery, sendSearchQuery } from '../../actions/searchBar.actions';

class SearchBar extends Component {
  updateIp(e) {
    const { changeSearchQueryAction, query } = this.props;
    changeSearchQueryAction({
      Ip: e.target.value,
      Api: query.Api,
    });
  }

  changeApi(e) {
    const { changeSearchQueryAction, query } = this.props;
    changeSearchQueryAction({
      Ip: query.Ip,
      Api: e.currentTarget.value,
    });
  }

  render() {
    const { query, sendSearchQueryAction } = this.props;
    return (
      <div className="sb--wrapper">
        <div>
          <input className="sb--input" value={query.Ip} onChange={e => this.updateIp(e)} />
          <button type="button" className="sb--btn" onClick={() => sendSearchQueryAction(query)}>
            Find this ip adress
          </button>
        </div>
        <form className="sb--rb-group">
          <label htmlFor="geoApi">
            <input
              type="radio"
              value="geo"
              id="geoApi"
              onChange={e => this.changeApi(e)}
              checked={query.Api === 'geo'}
            />
            Geo Api
          </label>
          <label htmlFor="providerApi">
            <input
              type="radio"
              value="provider"
              id="providerApi"
              onChange={e => this.changeApi(e)}
              checked={query.Api === 'provider'}
            />
            Provider IP API
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => ({ query: store.searchBarState.query });

const mapDispatchToProps = dispatch => ({
  changeSearchQueryAction: query => dispatch(changeSearchQuery(query)),
  sendSearchQueryAction: query => dispatch(sendSearchQuery(query)),
});

SearchBar.propTypes = {
  query: PropTypes.shape({
    Ip: PropTypes.string.isRequired,
    Api: PropTypes.string.isRequired,
  }).isRequired,
  changeSearchQueryAction: PropTypes.func.isRequired,
  sendSearchQueryAction: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
