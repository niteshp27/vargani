import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Dataform } from "./components/Dataform";
import { Previewform  } from "./components/Previewform";
import { ErrorBoundary } from "./components/ErrorBoundary";

class App extends React.Component{
    render(){
        
        var styleVar = {
            width: '50%',
            display: 'inline-block',
            color: '#666',
            verticalAlign: 'top',
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all' // 'ms' is the only lowercase vendor prefix
        };
        var user = {
            name: "Nitesh",
            hobbies: [ "Reading", "Sports"]
        }
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="container-wrapper mainWrappper">
                    <div style={styleVar}>
                        <Dataform/>
                    </div>
                    <div style={styleVar}>
                        <Previewform  formName= "Preview Form" user={user}/>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
                           
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));
