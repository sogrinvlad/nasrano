import React, {Component} from 'react';
import { HorizontalBar } from "react-chartjs-2";

export class ExcrementRadar extends Component {

    componentDidMount() {

    }

    render() {
        const options = {
            title: {
                display: true,
                text: 'За последние 24 часа',
                fontSize: 36
            },
            legend: {
                position: 'none'
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 24
                    }
                }]
            }
        }
        const data = this.props.radarData
        return (
            <HorizontalBar
                data={data}
                options={options}
                width={500}
                height={500}
            />
        )
    }
}

//<Chart type="polarArea" data={data} options={options} />