import * as React from "react";
import TodoContainer from "./components/todo/todo-container";

const App: React.FC<{}> = () => {
  return (
    <>
      <h1>React Redux Typescript</h1>
      <TodoContainer />
    </>
  );
};

export default App;
