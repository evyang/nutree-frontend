import React from 'react';
import Radar from 'react-d3-radar';

class RadarChart extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render () {
    let data = {
      variables: this.props.variables,
      sets: this.props.sets,
    };
    return (
      <div>
        <button type="button" className="btn btn-primary">{data.sets[0].label}</button>
        <button type="button" className="btn btn-warning">{data.sets[1].label}</button>
        <Radar
          width={500}
          height={400}
          padding={80}
          domainMax={3}
          highlighted={null}
          onHover={(point) => {
            // if (point) {
            //   console.log('hovered over a data point');
            // } else {
            //   console.log('not over anything');
            // }
          }}
          data={data}
        />
      </div>
    )
  }
}

export default RadarChart
