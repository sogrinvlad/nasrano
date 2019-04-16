import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export class ExcrementRadar extends Component {
    render() {
        const options = {
            title: {
                display: true,
                text: 'За последние 24 часа',
                fontSize: 36
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 24
                }
            }
        }
        const data = this.props.radarData
        return (
            <Chart type="polarArea" data={data} options={options} />
        )
    }
}