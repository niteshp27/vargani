import React from "react";
import { Button } from "@blueprintjs/core";

export class Dataform extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        return false;
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
            </div>
        );
    }
}

