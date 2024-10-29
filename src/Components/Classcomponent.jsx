// import React from 'react';
// class Counter extends React.Component{
//    constructor(props){
//       super(props);
//       this.state={
//          counter:0
//       }
//    }

//    handleClick = () => {
//       this.setState( (prevState) => {
//          return { counter: prevState.counter + 1 }
//       })
//    }

//    render(){
//       return(
//          <button onClick={ handleClick }>
//             {this.state.counter}
//          </button>
//       )
//    }
// }

// export default Counter;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter/>);
import React from 'react';

class Classcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}  {this.state.model} from {this.state.year}.
        </p>
      </div>
    );
  }
}
export default Classcomponent