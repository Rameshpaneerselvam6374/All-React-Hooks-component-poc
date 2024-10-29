// import { render } from "@testing-library/react";
import React from "react";

class SampleReactClassComponent extends React.Component{
    constructor (props) {
    super(props);
    this.state={count : 0, }

this.increment=this.increment.bind(this);
this.decrement=this.decrement.bind(this);
console.log("Component Re-renders Constructor");
}
increment () {
    console.log("Component Re-render increment");
    this.setState(previousValue=>({count:previousValue.count+1,}));
}

decrement () {
        console.log("Component Re-render decrement");
    this.setState(previousValue=>({count:previousValue.count-1,}));
}

componentDidMount () {
    console.log("Component Did Mount Called");
    // setTimeout(()=>{this.setState({count:1})},2000)
}

// shouldComponentUpdate () {
//     console.log("Should Component Update");
//     return true;
// }

// getSnapshotBeforeUpdate (prevProps, prevState) {
//     console.log("get Snapshot Before Update");
//     document.getElementById("div1").innerHTML="Before the Update, the count was"+prevState.count;
// }

componentDidUpdate () {
    // setTimeout(()=>{
    //     this.setState({count:5})
    // },1000)
    console.log("Component Did Update is call");
    document.getElementById('div2').innerHTML="The Update is Count"+this.state.count;
    document.getElementById('div3').innerHTML="Did Update Triggered";
}

componentWillUnmount () {
    console.log("the component is un mount");
    this.setState({count: 10})
}

chkEvent = (a,b) => {
    console.log("a---",a);
    alert(b.type);
//     // 'b' represents the react event that trigged the functionin this
//     // case  the click event
}

render() {
    console.log("Component Re-render thhe Render Block")
    return(
    <>
    <div className="counter">
        <h1>Sample counter app using class component</h1>
        <h2>{this.state.count}</h2>
        <div id="div1"></div>
        <div id="div2"></div>
        <div id="div3"></div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
       
        <br></br>
        <button onClick={(event)=>this.chkEvent("counter",event)}>Check Events</button>
    </div>

    </>
    );
}
}

export default SampleReactClassComponent;