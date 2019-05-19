import React from "react";
import {Button} from "reactstrap";
import { Col, Row } from "reactstrap";

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class TopBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            username: ''
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    componentDidMount() {
        fetch('/current_user')
            .then(res => res.json())
            .then(res => this.setState({username: res.first_name}))
    }

    signOut = () => {
        fetch('/users/sign_out').then(
            _ => (
                window.location.reload()
            )
        )
    }

    render() {
        return(
            <Row className="topbar">
                <Col className={'pt-2'}>Насрано логотип</Col>
                <Col className={'pt-3'}>
                    {/*<a href={'/users/sign_out'}>*/}
                    {/*    <Button color={'warning'} className={'float-right'}>*/}
                    {/*        Выйти*/}
                    {/*    </Button>*/}
                    {/*</a>*/}
                    <ButtonDropdown className={'float-right'} direction={'left'} isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                        <DropdownToggle caret  color={'info'}>
                            {this.state.username}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem disabled>Редактировать</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={this.signOut}>Выйти</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </Col>


            </Row>
        )

    }
}
