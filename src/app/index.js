import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { NoMatch } from "./components/NoMatch";

class App extends React.Component{

    render(){

        return(
            
            <Router>
                <Root>   
                    <Switch>               
                        <Route exact path="/" component={Home} >
                         
                        </Route>
                        <Route path="/home" component={Home} >
                     
                        </Route>
                        <Route  path="/user" component={User}>                   
                           
                        </Route>
                        <Route component={NoMatch}> 
                          
                        </Route>
                    </Switch>
                </Root>
            </Router>
                          
        );
    }
}

render(<App/>,window.document.getElementById("app"));
