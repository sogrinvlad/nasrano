import React from "react";
import TopBar from "./base/TopBar";
import SideBar from "./base/SideBar";
import Content from "./base/Content";

export default class Home extends React.Component {
    render() {
        return (
            <div className={'wrapper'}>
                <TopBar/>
                <SideBar/>
                <Content/>
            </div>
        )
    }
}