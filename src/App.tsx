import React from "react";
import { useState } from "react";

import Wrapper from "./components/UI/Wrapper";
import TodoAppBar from "./components/TodoAppBar/TodoAppBar";
import Todos from "./components/Todos/Todos";
import Todo from "./models/todo";

// Helper functions
function sortTodos(todos: Todo[], ascending = true) {
  let sortedTodos: Todo[];

  if (ascending) {
    sortedTodos = todos.sort(({ dueDate: d1 }, { dueDate: d2 }) => {
      if (d1.getTime() < d2.getTime()) {
        return 1;
      }

      if (d1.getTime() > d2.getTime()) {
        return -1;
      }

      return 0;
    });
  } else {
    sortedTodos = todos.sort(({ dueDate: d1 }, { dueDate: d2 }) => {
      if (d1.getTime() > d2.getTime()) {
        return 1;
      }

      if (d1.getTime() < d2.getTime()) {
        return -1;
      }

      return 0;
    });
  }

  return sortedTodos;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showArchives, setShowArchives] = useState(false);
  const [isAscending, setIsAscending] = useState<boolean | null>(null);

  // Handler functions
  const toggleArchivesHandler = () => {
    setShowArchives((prevState) => !prevState);
  };

  const toggleSortHandler = () => {
    setIsAscending((prevState) => (prevState ? false : true));
  };

  const newTodoHandler = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodoHandler = (todo: Todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];

      const todoIdx = updatedTodos.findIndex((el) => el.id === todo.id);

      if (todoIdx !== -1) {
        updatedTodos.splice(todoIdx, 1);
      }

      return updatedTodos;
    });
  };

  const updateTodoHandler = (todo: Todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];

      const todoIdx = updatedTodos.findIndex((el) => el.id === todo.id);

      if (todoIdx !== -1) {
        updatedTodos[todoIdx] = todo;
      }

      return updatedTodos;
    });
  };

  // Conditional JSX elements
  const filteredTodos = showArchives
    ? todos.filter((todo) => todo.archived === true)
    : todos.filter((todo) => todo.archived === false);

  const todosContent = (
    <Todos
      todos={
        typeof isAscending === null
          ? filteredTodos
          : isAscending
          ? sortTodos(filteredTodos, true)
          : sortTodos(filteredTodos, false)
      }
      onRemoveTodo={removeTodoHandler}
      onUpdateTodo={updateTodoHandler}
    />
  );

  return (
    <Wrapper>
      <TodoAppBar
        isArchives={showArchives}
        isAscending={isAscending}
        onNewTodo={newTodoHandler}
        onToggleArchives={toggleArchivesHandler}
        onToggleSort={toggleSortHandler}
      />
      {todosContent}
    </Wrapper>
  );
}

export default App;
