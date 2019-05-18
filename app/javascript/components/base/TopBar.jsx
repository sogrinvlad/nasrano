import React from "react";
import {Button} from "reactstrap";
import { Col, Row } from "reactstrap";

export default class TopBar extends React.Component {

    render() {
        return(
            <Row className="topbar">
                <Col>Насрано логотип</Col>
                <Col>
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
