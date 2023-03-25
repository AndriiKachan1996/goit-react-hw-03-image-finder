import PropTypes from 'prop-types';
import { Component } from 'react';

import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    value: '',
  };

  handlerOnChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handlerOnSubmit = event => {
    event.preventDefault();
    // const form = event.currentTarget;
    const { value } = this.state;

    this.setState({ value: '' });

    this.props.onSubmit(value);
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handlerOnSubmit}>
          <SearchFormButton
            type="submit"
            disabled={this.state.value.trim().length === 0}
          >
            <SearchFormButtonLabel />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="value"
            value={this.state.value}
            onChange={this.handlerOnChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

export default SearchBar;
