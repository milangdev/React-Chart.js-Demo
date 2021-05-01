import React, { Component } from 'react'
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
let myLineChart;

export default class LineChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Sales",
                        data: data,
                        fill: false,
                        borderColor: "#6610f2"
                    },
                    {
                        label: "National Average",
                        data: average,
                        fill: false,
                        borderColor: "#E0E0E0"
                    }
                ]
            },
        });
    }

    render() {
        return (
            <div className="chartContainer">
                <canvas
                    ref={this.chartRef}
                />
            </div>
        )
    }
}