import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutRouter from "./Components/Pages/LayoutRouter";
import Home from "./Components/Pages/Home";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Nopage from "./Components/Pages/Nopage";

import './App.css';
import Myprops from './Components/Myprops';
import './Layout1.css';
import Layout1 from './Components/Layout';
import Counter from './Components/Functioncounter';
import Usestate from './Components/Usestate';
// import AppRouter from './Pages/App';
// import CounterApp from './Components/Counter';
import SampleReactClassComponent from './Components/SampleReactClassComponent';
import SampleLifecycleClass from './Components/SampleLifecycleClass';
import FunctionHook from './Components/FunctionHook';
import ExamplePoc from "./example";
import Classcomponent from "./Components/Classcomponent";
// import fetchapi from "./Components/UseEffect";
import UseEffect from "./Components/UseEffect";
// import FetchDataApi from "./FetchDataApi";
// import Example1 from "./Example1";
// import Component1 from "./Components/Component1";
// import RandomUserData from "./FetchDataApi";
// import MultipleUseState from "./Components/MultipleUseState";
// import UseEffectDataFetcher from "./Components/UseEffectDataFetcher";
// import RegisterData from "./Components/RegisterData";
import RefForm from "./Components/RefForm";
// import ComponentA from "./Components/ComponentA";
// import { useContext } from "react";
// import Propsss from "./Components/props";
// import CRUDOperation from "./Components/CRUDOperation";
// import ReduserHookSample from "./Components/ReduserHookSample";
import ReduserPoc from "./Components/ReduserPoc";
import Child from "./Components/Props/child";
import Parent from "./Components/Props/parent";
// import UseReduser from "./Components/UseReduser";
// import StateApp from "./Components/StateApp";
import ReducerApp from "./Components/ReducerApp";
import GrandParentComponent from "./Components/UseContextAndPropsDrilling/GrandParentComponent";
import FetchApiData from "./Components/FetchData/FetchApiData";

//redux toolkit function
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Components/ReduxToolkit/CounterSlice";
import UseMemo from "./Components/UseMemo";
import UseCallback from "./Components/UseCallback";
import Parent1 from "./Components/CallBack Hook/ParentC";

const App = () => {

  // redux toolkit use to useselector function      
  const count = useSelector((state) => state.counter.value);
  // useDispatch using to reducer hooks to   counterslice.js component
  const dispatch = useDispatch()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutRouter />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
            <Route path="Classcomponent" element={<Classcomponent />} />
            <Route path="Counter" element={<Counter />} />
            <Route path="Counter" element={<Counter />} />
            <Route path="FunctionHook" element={<FunctionHook />} />
            <Route path="Layout1" element={<Layout1 />} />
            <Route path="Myprops" element={<Myprops />} />
            <Route path="sampleLifecycleClass" element={<SampleLifecycleClass />} />
            <Route path="SampleReactClassCompnent" element={<SampleReactClassComponent />} />
            <Route path="Usestate" element={<Usestate />} />
            <Route path="example" element={<ExamplePoc />} />
            <Route path="UseEffect" element={<UseEffect />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* {/* <FetchDataApi></FetchDataApi>
    <Example1></Example1>
    <Component1></Component1> */}
      {/* <RegisterData></RegisterData> */}
      {/*  <MultipleUseState></MultipleUseState>
     <UseEffectDataFetcher></UseEffectDataFetcher> */}

      {/* <RefForm></RefForm> */}
      {/* <ComponentA></ComponentA> */}
      {/* <Propsss title="hello"  description="hello1234">
      <p>lorem1 rqmewh dhnesh kumar ragul </p>
      
    </Propsss>
    */}
      {/* <CRUDOperation></CRUDOperation> */}
      {/* <ReduserHookSample></ReduserHookSample> */}
      {/* <ReduserPoc></ReduserPoc>
    <Child/>
    <Parent/> */}
      {/* <UseReduser/>
    <StateApp/> */}
      {/* <ReducerApp/>
    <GrandParentComponent/>
    <FetchApiData/> */}

      {<div>
        <h1>Redux Toolkit</h1>
        {/* count variable  using to the useselector redux toolkit */}
        <p>count = {count}</p>
        {/* dispatch variable using to the useDispatch redux toolkit */}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Increment</button>
      </div>}

      <UseMemo></UseMemo>

      <UseCallback></UseCallback>
     <Parent1 />

    </>


  );
}

export default App;