import React from "react";
import { Button } from "@blueprintjs/core";
import PropTypes from "prop-types";

export class Dataform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            previewFormName: props.InitialFormName
        };
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return true;  //we are adding data so should be true
    }
    onChangePreviewFormNameLFunc(){
        this.props.ChangeName(this.state.previewFormName);
        console.log("Dataform>>--"+ this.state.previewFormName);
    }
    onChangeHandleLFunc(event){
        console.log("onChangeHandleLFunc>>--"+ event.target.value);
        this.setState({
            previewFormName: event.target.value
        });
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
                <input type="text" value={ this.state.previewFormName } onChange={ (event) => this.onChangeHandleLFunc(event)} />
                </p>
                <p>
                <Button text="Change Form Title" onClick={ () => this.onChangePreviewFormNameLFunc()} />
                </p>
            </div>
        );
    }
}

Dataform.PropTypes = {
    InitialFormName: PropTypes.string,
    ChangeName: PropTypes.func
}