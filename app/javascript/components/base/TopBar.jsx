import React from "react";
import {Button} from "reactstrap";
import { Col, Row } from "reactstrap";

export default class TopBar extends React.Component {

    render() {
        return(
            <Row className="topbar">
                <Col className={'pt-2'}>Насрано логотип</Col>
                <Col className={'pt-3'}>
                    <a href={'/users/sign_out'}>
                        <Button color={'warning'} className={'float-right'}>
                            Выйти
                        </Button>
                    </a>
                </Col>


            </Row>
        )

    }
}
