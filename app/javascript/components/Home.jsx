import React from "react";
import TopBar from "./base/TopBar";
import Content from "./base/Content";
import Container from "reactstrap/es/Container";

export default class Home extends React.Component {
    render() {
        return (
            <div className={'wrapper'}>
                <Container>
                    <TopBar/>
                    <Content/>
                </Container>

            </div>
        )
    }
}