// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const name = <h1>Daniel Amekpoagbe Yawson</h1>;
  const age = 21;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        {name}
        {age}
        <User name="daniel Yawson" age={27} email="swastyjay2022@gmail.com" />
      </div>
    </>
  );
}
const User = (props) => {
  return (
    <div>
      <h1>{props.name} </h1>
      <h1>{props.age}</h1>

      <h4>{props.email} </h4>
    </div>
  );
};
export default App;
