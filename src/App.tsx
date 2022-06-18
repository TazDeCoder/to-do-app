import React from "react";

import Wrapper from "./components/UI/Wrapper";
import TodoAppBar from "./components/TodoAppBar/TodoAppBar";
import Todos from "./components/Todos/Todos";
import Todo from "./models/todo";

function App() {
  const newTodoHandler = (newTodo: Todo) => {};

  return (
    <Wrapper>
      <TodoAppBar onNewTodo={newTodoHandler} />
      <Todos todos={[]} />
    </Wrapper>
  );
}

export default App;
