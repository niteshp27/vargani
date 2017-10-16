import React from 'react';
import { ErrorBoundary } from "../components/ErrorBoundary";

export class Previewform extends React.Component{
    render() {
        console.log(this.props.formName);
        console.log(this.props.user);
        return (
            <div className="formData">
                <p><b>{this.props.formName}</b></p>
                <p>
                Name: <span>{ this.props.user.name}</span>
                </p>
                <div>
                    <ul>
                        {
                            this.props.user.hobbies.map(
                                (hobby, i) => <li key={i} >{hobby}</li>
                            )
                        }
                    </ul>
                </div>
                <p>
                Amount: <span></span>
                </p>
            </div>
        );
    }
}