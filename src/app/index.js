import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Dataform } from "./components/Dataform";
import { Previewform  } from "./components/Previewform";
import { ErrorBoundary } from "./components/ErrorBoundary";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            previewFormName: "Preview Form!!!",
            homeMounted: true
        };
    }

    onChangePreviewFormName(newName){
//        console.log("App??this.state.previewFormName--"+ this.state.previewFormName);
//        console.log("App::newName--"+ newName);
        
        this.setState({
            previewFormName: newName
        });
    }

    onGreet(){
        alert("Hello");
    }

    //compunentunmount simulation
    onHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }
    render(){
        
        let styleVar = {
            width: '50%',
            display: 'inline-block',
            color: '#666',
            verticalAlign: 'top',
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all' // 'ms' is the only lowercase vendor prefix
        };
        let user = {
            name: "Nitesh",
            hobbies: [ "Reading", "Sports"]
        }

        let homeCmp = "";
        if(this.state.homeMounted){
            homeCmp = ( <Footer FooterDesc="This is second footer text."/> );
        }

        return(
            <div>
                <div>
                    <ErrorBoundary>
                        <Header />
                    </ErrorBoundary>
                </div>
                <div className="container-wrapper mainWrappper">
                    <div style={styleVar}>
                        <ErrorBoundary>
                            <Dataform ChangeName= { this.onChangePreviewFormName.bind(this) } InitialFormName= {this.state.previewFormName}/>  
                            {/* this.onChangePreviewFormName.bind(this) does not bind this and causes error */}
                        </ErrorBoundary>
                    </div>
                    <div style={styleVar}>
                        <ErrorBoundary>
                            <Previewform FormName= {this.state.previewFormName}  User={user} OnGreet={this.onGreet} >
                            Hello Preview!
                            </Previewform>
                        </ErrorBoundary>
                    </div>
                </div>
                <div>
                    <ErrorBoundary>
                        <Footer FooterDesc="This is footer text."/>
                        <div>
                            {homeCmp}
                        </div>
                        <div>
                        <button text="Un Mount" onClick={ () => this.onHomeMounted() } > UnmOunt </button>
                        </div>
                    </ErrorBoundary>
                </div>
                           
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));
