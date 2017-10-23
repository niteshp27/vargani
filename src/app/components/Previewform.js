import React from 'react';
import { ErrorBoundary } from "../components/ErrorBoundary";
import PropTypes from 'prop-types';

export class Previewform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            InitialAge: props.InitialAge,
            Staus: 0
         }
         setTimeout( () => {
            this.setState({
                Staus: 1
            });
            console.log(this.state);
        },5000);
        console.log('constructor');        
    }
    onMakeOlder(){
        this.setState({
            InitialAge: this.state.InitialAge +3
        });
    }


    componentWillMount(){
        console.log('component will mount');
    }

    componentDidMount(){
        console.log('component did mount');
    }

    componentWillReceiveProps(nextProps){
        console.log('component will receive props', nextProps);
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log('component shouldComponentUpdate', nextProps, nextState);
        //we can access nextState state object and its values as e.g.-
        /*
        if(nextState.status === 1){
            return false; //we can override default rendering this way for particular behaviour
        }
        */
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('component will update', nextProps, nextState);
    }


    componentDidUpdate(nextProps, nextState){
        console.log('component did update', nextProps, nextState);
    }

    componentWillUnmount(){
        console.log('component will Unmount');
    }
    
    render() {
//        console.log(this.props);
//        console.log(this.state);
        return (
            <div className="formData">
                <p>
                { this.props.children }
                </p>
                <p><b>{this.props.FormName}</b></p>
                <p>
                    Name: <span>{ this.props.User.name}</span>
                </p>                    
                <p>
                    Age: <span>{ this.state.InitialAge}</span>
                </p>
                <p> 
                    Staus: <span>{ this.state.Staus}</span>
                </p>
                <p>
                <button onClick={ () => this.onMakeOlder() } > Increase Age </button>
                </p>
                <hr/>
                <p>
                <button onClick={ () => this.props.OnGreet() } > Greet </button>
                </p>
                <div>
                    <ul>
                        {
                            this.props.User.hobbies.map(
                                (hobby, i) => <li key={i} >{hobby}</li>
                            )
                        }
                    </ul>
                </div>
                <p>
                Amount: <span></span>
                </p>
            </div>
        );
    }
}

Previewform.PropTypes = {
    FormName: PropTypes.string,
    User: PropTypes.object,
    children: PropTypes.element.isRequired
};

// Specifies the default values for props:
Previewform.defaultProps = {
    InitialAge: 18
};
  