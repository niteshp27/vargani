import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ErrorBoundary } from "../components/ErrorBoundary";

export class Root extends React.Component{

    render(){
        
        return(
            <div>
                
                    <ErrorBoundary>
                        <Header />
                    </ErrorBoundary>
                
                
                    <ErrorBoundary>
                        {this.props.children }
                    </ErrorBoundary>
                
                
                    <ErrorBoundary>
                        <Footer FooterDesc="This is footer text."/>
                    </ErrorBoundary>
                
            </div>               
            
        );
    }
}

