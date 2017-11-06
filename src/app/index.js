import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Root } from "./components/Root.jsx";
import { Home } from "./components/Home.jsx";
import { User } from "./components/User.jsx";
import { NoMatch } from "./components/NoMatch.jsx";

class App extends React.Component{

    render(){

        return(
            
            <Router>
                <Root>   
                    <Switch>               
                        <Route exact path={"/"} component={Home} >
                         
                        </Route>
                        <Route path={"/home"} component={Home} >
                     
                        </Route>
                        <Route  path={"/user/:id"} component={User}>                   
                           
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
