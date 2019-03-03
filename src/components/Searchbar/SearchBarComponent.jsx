import React, { Component } from 'react';
import './SearchBarComponent.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
    this.updateState = this.updateState.bind(this);
    this.showState = this.showState.bind(this);
  }

  updateState(e) {
    this.setState({ inputValue: e.target.value });
  }

  showState() {
    console.log(this.state);
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div className="sb--wrapper">
        <div>
          <input className="sb--input" value={inputValue} onChange={this.updateState} />
          <button type="button" className="sb--btn" onClick={this.showState}>
            Find this ip adress
          </button>
        </div>
        <form>
          <div className="sb--rb-group" radioGroup>
            <label htmlFor="geoApi">
              <input
                type="radio"
                value="option1"
                id="geoApi"
                onChange={this.handleOptionChange}
                checked={this.state.selectedOption === 'option1'}
              />
              Geo Api
            </label>
            <label htmlFor="providerApi">
              <input type="radio" value="option2" id="providerApi" />
              Provider IP API
            </label>
            <label htmlFor="allApi">
              <input type="radio" value="option3" id="allApi" />
              All info about ip
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
