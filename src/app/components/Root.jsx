import React from "react";
import PropTypes from 'prop-types';
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { ErrorBoundary } from "../components/ErrorBoundary.jsx";

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