import React, {Component} from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';

export default class SearchBox extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  render () {
    return (
      <div>
        <Typeahead
          id='id'
          onChange={(selected) => {
            this.setState({value: selected[0]});
            this.props.onSubmit(selected[0])
          }}
          options={this.props.list}
          selected={this.state.selected}
          placeholder='Enter a country name...'
        />
        {/*<button className="button banner_btn_1" onClick={()=>this.props.onSubmit(this.state.value)}>*/}
        {/*  Run*/}
        {/*</button>*/}
        {/*<form onSubmit={(e) => {*/}
        {/*  e.preventDefault();*/}
        {/*  if (this.state.value !== '') {*/}
        {/*    this.props.onSubmit(this.state.value);*/}
        {/*  }*/}
        {/*}}>*/}
        {/*  <input*/}
        {/*    type='text'*/}
        {/*    value={this.state.value}*/}
        {/*    placeholder='Enter Country Name'*/}
        {/*    className='input'*/}
        {/*    onChange={this.handleChange}*/}
        {/*  />*/}
        {/*  <button className="button banner_btn_1" type='submit'>*/}
        {/*    Run*/}
        {/*  </button>*/}
        {/*</form>*/}
      </div>
    )
  }
}
