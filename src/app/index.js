import React from "react";
import { render } from "react-dom";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";

class App extends React.Component{

    render(){

        return(
            <div>
                <Root>                           
                    <Dashboard />
                </Root>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));
