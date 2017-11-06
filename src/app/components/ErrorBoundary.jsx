import React from "react";
export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        error: null,
        errorInfo: null
       };
       
    }
     
    componentDidCatch(error, info) {
      this.setState({ 
        error: error,
        errorInfo: info
      });
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }

    render() {
      let styleVar = { margin: '10px 0', color: 'red' }
      
      if (this.state.errorInfo) {
        return (
          <div className="container-wrapper">
              <h6 style={styleVar}>Something went wrong.</h6>
              <p>Error<br/>{this.state.error && this.state.error.toString()}</p>
              <p>Info<br/>{this.state.errorInfo.componentStack}</p>
          </div>
        );
      }
      return this.props.children;
    }
  }




  