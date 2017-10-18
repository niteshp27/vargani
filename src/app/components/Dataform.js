import React from "react";
import { Button } from "@blueprintjs/core";

export class Dataform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            previewFormName: "Changed PreviewForm"
        };
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    onChangePreviewFormName(){
        this.props.ChangeName(this.state.previewFormName);
        console.log("Dataform>>--"+ this.state.previewFormName);
    }

    render() {
        return (
            <div className="inputForm">
                <p>
                    <input type="text" placeholder="Name" />
                </p>
                <p>
                    <input type="text" placeholder="Amount" />
                </p>
                <p>
                    <Button text="Actions" />
                </p>
                <p>
                <Button text="Change Form Title" onClick={ () => this.onChangePreviewFormName()} />
                </p>
            </div>
        );
    }
}

