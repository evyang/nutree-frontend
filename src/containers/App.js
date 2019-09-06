import React, {Component} from 'react';
import {connect} from 'react-redux';

import RadarChart from "../components/radarChart";
import Page from "../components/Page";
import {Link} from 'react-router-dom';
import {getTwoCountries} from "../redux/selectors";
import ColumnChart from "../components/ColumnChart";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      barChart: {
        data: [12, 5, 6, 6, 9, 10],
        width: 700,
        height: 500,
        id: 'id'
      },
      data: {
        variables: [],
        sets: []
      }
    }
  }

  render () {
    const {twoCountries} = this.props;
    let radarChart, columnChart1, columnChart2;
    if (twoCountries[0] && twoCountries[1]) {
      radarChart = <RadarChart
        variables={twoCountries[2]}
        sets={twoCountries.slice(0, 2)}
        width={this.state.barChart.width}
        height={this.state.barChart.height}
      />;
      columnChart1 = <ColumnChart
        data={twoCountries[1]}
      />;
      columnChart2 = <ColumnChart
        data={twoCountries[0]}
      />
    }
    return (
      <Page>
        <div className="bg_pic">
          <div className="row">
            <div className="col-6">
              <div className="desc">
                <h1>Nutrition Portfolio for {twoCountries[1] && twoCountries[1].label} </h1>
                <h5>Here you'll find all the information you need to understand current nutrient deficiencies within
                  {twoCountries[1] && twoCountries[1].label}. Hover over any point on the bar charts to see details.</h5>
              </div>
              {radarChart}
            </div>
            <div className="col-6">
              {columnChart1}
              {columnChart2}
            </div>
          </div>
          <Link
            to={{
              pathname: '/',
              state: {prev: false},
            }}
            className="nav__link"
          >
            <button className="button banner_btn_1" type='submit'>
              Back
            </button>
          </Link>
          <Link
            to={{
              pathname: '/recommendation',
              state: {prev: false},
            }}
            className="nav__link"
          >
            <button className="button banner_btn_1" type='submit'>
              Next
            </button>
          </Link>
        </div>
      </Page>
    );
  }
}

function mapStateToProps (state) {
  return {
    twoCountries: getTwoCountries(state),
  };
}

export default connect(mapStateToProps)(App);
