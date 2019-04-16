import React from "react";
import {Button} from "primereact/button";
import {ExcrementRadar} from "../ExcrementRadar";

export default class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            // excrements: []
            radarData: {}
        };
        this.postExcrement = this.postExcrement.bind(this)
        // this.fetchExcrements = this.fetchExcrements.bind(this)
    }

    // componentDidMount(){
    //     this.fetchExcrements()
    // }
    //
    // fetchExcrements(excrements = null){
    //     if (excrements) {
    //         this.setState({ excrements });
    //     } else {
    //         fetch('/api/v1/excrements.json')
    //             .then((response) => {return response.json()})
    //             .then((excrements) => {
    //                 this.setState({ excrements });
    //             });
    //     }
    // }

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
                    <div className="p-col"/>
                    <div className="p-col excrement_element">
                        <Button label={'Насрано!'} className='p-button-raised' onClick={this.postExcrement}/>
                    </div>

                    <div className="p-col">
                        <ExcrementRadar radarData={this.state.radarData}/>
                    </div>

                </div>
            </div>
        )
    }
}
