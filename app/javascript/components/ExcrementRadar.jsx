import React, {Component} from 'react';
import { Polar } from "react-chartjs-2";

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
                position: 'bottom',
                labels: {
                    fontSize: 24
                }
            },
            maintainAspectRatio: false
        }
        const data = this.props.radarData
        return (
            <Polar
                data={data}
                options={options}
                width={500}
                height={500}
            />
        )
    }
}

//<Chart type="polarArea" data={data} options={options} />