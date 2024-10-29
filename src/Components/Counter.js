import React from "react";

class CounterApp extends React.Component{
    constructor(){
        console.log("State Render to Constructor");
        super();
        this.state = {
            count:0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
       
    }
    
    increment (){
        console.log("State Render to Increment");
        this.setState(previousValue => ({
            count:previousValue.count+1,
        }));
       
    }
    decrement(){
        console.log("State Render to Decrement");
        this.setState(previousValue => ({ 
            count:previousValue.count-1,
            
        }));
      
    }
 
    render() 
    {
        console.log("State Render to Method");
        return (
            <>            <div className="counter">
                        <h1> Counter app using class Component</h1>
                        <p>count={this.state.count}</p>
                        <button onClick={this.increment}>Increment</button>
                        <button onClick={this.decrement}>Decrement</button>
            </div>
           
            </>
        )
        
    }
}
export default CounterApp;