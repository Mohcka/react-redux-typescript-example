import * as React from "react";
import TodoContainer from "./components/todo/todo-container";

import { Provider } from "react-redux"
import store from "./redux/store"

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <h1>React Redux Typescript</h1>
      <TodoContainer />
    </Provider>
  );
};

export default App;
