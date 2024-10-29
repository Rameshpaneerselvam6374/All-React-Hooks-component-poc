import React from "react";
class SampleLifecycleClass extends React.Component{
    constructor(props){
        console.log("Render to Constructor");
        super(props)
            this.state = {count : 1,
                model : "ford",
                name : "Ramesh",
                year : 2001
            };
    }
    componentDidMount = () => {
        console.log("Component is Did Mount");
        setTimeout ( () =>{
            this.setState({model:"bmw"})
        },1000)
    }
    increase = () => {
        this.setState({name:"Dhinesh"});
    }
    static  getDerivedStateFromProps(props, state) {
        console.log("getDrivedstatefromprpsis called")
        return {count: props.favcl };
      }
      changeColor = () => {
        this.setState({count:5});
      }
      shouldComponentUpdate = () => {
        console.log.apply("Should component is update")
        return true;
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("get snapshotBeforUpdate is call")
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.count;
      }
      componentDidUpdate() {
        console.log("Component did uupdate call");
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.count;
      }

      componentWillUnmount = () => {
        console.log("Comonent will unmount is call");
        alert("   unmount ");
      }
    render(){
        console.log("Render Block call");
        return(
            <>
                     
            <h1>This is Class Component Life Cycle Method</h1>
            <h2>Threee Phases of Mounting, Updating, Unmount </h2>
            <p>Hi {this.state.name} my {this.state.model} car in year {this.state.year} in number of car {this.state.count}</p>
            <button onClick={this.increase}>Change Name</button>
            <button onClick={this.changeColor}>Change state count</button>
            </>
        );
    }
}
export default SampleLifecycleClass;