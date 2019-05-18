import React from "react";
import {Button} from "primereact/button";

export default class TopBar extends React.Component {

    render() {
        return(
            <div className="topbar">
                Насрано логотип

                <a href={'/users/sign_out'}>
                    <Button label={'Выйти'} className='p-button-warning'/>
                </a>
            </div>
        )

    }
}
