import React from "react";
import { Button } from "reactstrap";

import {ExcrementRadar} from "../ExcrementRadar";
import Col from "reactstrap/src/Col";

export default class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            radarData: {}
        };
        this.postExcrement = this.postExcrement.bind(this)
    }

    componentDidMount() {
        this.fetchRadarData()
    }

    fetchRadarData = () => {
        fetch('/api/v1/excrements/radar_data')
            .then(res => res.json())
            .then(radarData => {
                this.setState({radarData});
            })
    };

    postExcrement(){
        let body = JSON.stringify({excrement: { user_id: (Math.floor(Math.random() * (6 - 1)) + 1) } })
        fetch('/api/v1/excrements', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => {return response.json()})
            .then((excrements)=>{
                // this.fetchExcrements(excrements)
                this.fetchRadarData()
            })
    }

    render() {
        return(
            <div className="content">
                <div className="p-justify-center">
                    <Col className="excrement_element">
                        <Button color={'primary'} onClick={this.postExcrement}>
                            Насрано!
                        </Button>
                    </Col>

                    <Col>
                        <ExcrementRadar radarData={this.state.radarData}/>
                    </Col>

                </div>
            </div>
        )
    }
}
