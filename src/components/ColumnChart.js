import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends React.Component {
  render () {
    const data = this.props.data.values;
    const points = [];
    Object.keys(data).forEach(d => {
      points.push({
        label: d,
        y: data[d]
      });
    });

    const options = {
      title: {
        "font-family": "Roboto",
        text: this.props.data.label
      },
      animationEnabled: true,
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: points
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    )
  }
}

export default ColumnChart;
