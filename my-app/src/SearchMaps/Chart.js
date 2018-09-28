import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }
  options = {
    title: {
      text: 'Fruit Consumption',
    },
    xAxis: {
      categories: [
        'Apples',
        'Bananas',
        'Oranges',
        'Pineapples',
        'Blueberries',
      ],
    },
    yAxis: {
      title: {
        text: 'Fruit eaten',
      },
    },
    chart: {
      type: 'line',
    },
    series: [
      {
        name: 'Jane',
        data: [1, 0, 4, 0, 3],
      },
      {
        name: 'John',
        data: [5, 7, 3, 2, 4],
      },
      {
        name: 'Doe',
        data: [0, 0, 0, 1, 0],
      },
    ],
  };
  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartContainer.current,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
      return (
        <div>
          <Chart options={this.options} />
          <div ref={this.chartContainer} />
        </div>
      );
     // return <div ref={this.chartContainer} />;
  }
}

export default Chart;