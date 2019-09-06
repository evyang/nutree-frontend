import React, {Component} from 'react';
import logo from '../images/logo.png';
import banner from '../images/banner_img.png';
import SearchBox from "../components/SearchBox";
import {connect} from 'react-redux';
import {fetchCountryData} from '../redux/actions/actions';
import {fetchCountryList} from '../redux/actions/actions';
import '../styles/App.css';
import Page from "../components/Page";

class Home extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props.dispatch(fetchCountryData('standard'));
    this.props.dispatch(fetchCountryList());
  }

  handleSubmit (countryName) {
    this.props.dispatch(fetchCountryData(countryName));
    this.props.history.push({pathname: '/about', state: {prev: true}})
  }

  render () {
    const {countryList} = this.props;
    let list = [];
    if (countryList.list && countryList.list.length) {
      list = countryList.list;
    }
    return (
      <Page>
        <div>
          <section className="banner">
            <div className="container">
              <div className="navbar-brand">
                <img src={logo} height='100' className="App-logo" alt="logo"/>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="banner_text">
                    <div className="banner_text_iner">
                      <h1 className="banner_text_search"> Who are you feeding today? </h1>
                      <SearchBox
                        onSubmit={this.handleSubmit}
                        list={list}
                      />
                    </div>
                  </div>
                </div>
                <div className="banner_img d-none d-lg-block">
                  <div className="something1">
                    <img src={banner} height='350' className="logo" alt="logo"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Page>
    )
  }
}


function mapStateToProps (state) {
  const {countryData, countryList} = state;
  return {
    countryData,
    countryList
  };
}

export default connect(mapStateToProps)(Home);
