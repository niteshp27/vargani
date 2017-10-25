import React from 'react';
import { Match } from "react-router-dom";

export class User extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.match.params);
        this.state = {
            UserId: this.props.match.params.id
        };
    }
        
    render(){
        let userName = "Nitesh";
        return(
            <div className="container-wrapper mainWrappper">
                <p>
                    <b>User</b>: { this.state.UserId }                                
                </p>
            </div>
        );
    }
}