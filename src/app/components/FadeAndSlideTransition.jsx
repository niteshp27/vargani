import TransitionGroup from 'react-transition-group'
import React from "react";
// <FadeAndSlideTransition /> is a component that wraps children in 
// a <Transition /> component. 
// 'children' is the element to be animated.
// 'duration' is the duration of the animation in milliseconds.
// The `in` prop will be provided by <TransitionGroup />. 


                //({children, duration, in: inProp})

export class FadeAndSlideTransition extends React.Component {
    constructor(props) {
        super(props);  
        console.log(props.duration);
        this.state = {
            duration : props.duration,
            inProp : props.inProp
        }    
    }
    
    render(){

        // Styles to set on children which are necessary in order
        // for the animation to work.
        const defaultStyle = {
            // Transition "opacity" and "transform" CSS properties.
            // Set duration of the transition to the duration of the animation.
            transition: `${this.state.duration}ms ease-in`,
            transitionProperty: 'opacity, transform'
        }

        // Styles that will be applied to children as the status
        // of the transition changes. Each key of the
        // 'transitionStyles' object matches the name of a 
        // 'status' provided by <Transition />. 
        const transitionStyles = {
            // Start with component invisible and shifted up by 10%
            entering: {
            opacity: 0,
            transform: 'translateY(-10%)'
            },
            // Transition to component being visible and having its position reset. 
            entered: {
            opacity: 1,
            transform: 'translateY(0)'
            },
            // Fade element out and slide it back up on exit.
            exiting: {
            opacity: 0,
            transform: 'translateY(-10%)'
            }
        }

        return (
            <div> 
                <TransitionGroup in={this.state.inProp} timeout={{
                // Set 'enter' timeout to '0' so that enter animation
                // will start immediately.
                enter: 0,

                // Set 'exit' timeout to 'duration' so that the 'exited'
                // status won't be applied until animation completes.
                exit: this.state.duration
                }}>
                {
                    // Children is a function that receives the current
                    // status of the animation.
                    (status) => {
                    // Don't render anything if component has 'exited'.
                    if (status === 'exited') {
                        return null
                    }

                    // Apply different styles to children based
                    // on the current value of 'status'. 
                    const currentStyles = transitionStyles[status]
                    return React.cloneElement(children, {
                        style: Object.assign({}, defaultStyle, currentStyles)
                    })
                    }
                }
                </TransitionGroup>
            </div>            
        );
    }
}