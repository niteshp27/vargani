import React from "react";
import PropTypes from 'prop-types';
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

Root.propTypes = {
    children: PropTypes.element.isRequired
  };