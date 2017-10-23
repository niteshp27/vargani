import React from "react";
import { render } from "react-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ErrorBoundary } from "../components/ErrorBoundary";

export class Root extends React.Component{

    render(){
        
        return(
            <div>
                <div>
                    <ErrorBoundary>
                        <Header />
                    </ErrorBoundary>
                </div>
                <div>
                    <ErrorBoundary>
                        {this.props.children }
                    </ErrorBoundary>
                </div>
                <div>
                    <ErrorBoundary>
                        <Footer FooterDesc="This is footer text."/>
                    </ErrorBoundary>
                </div>
                           
            </div>
        );
    }
}

