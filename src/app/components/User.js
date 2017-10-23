import React from 'react';

export class User extends React.Component{    
    render(){
        let userName = "Nitesh";
        return(
            <div className="container-wrapper">
                <p>
                    <b>User Name</b>: { userName }
                </p>
            </div>
        );
    }
}