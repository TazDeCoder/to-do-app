import React from "react";

import { Container, Stack } from "@mui/material";

import TodoItem from "./TodoItem";
import Todo from "../../models/todo";

function Todos({
  todos,
  onRemoveTodo,
  onToggleArchiveTodo,
}: {
  todos: Todo[];
  onRemoveTodo: (todo: Todo) => void;
  onToggleArchiveTodo: (todo: Todo) => void;
}) {
  return (
    <Container sx={{ width: "50rem", maxWidth: "90%" }}>
      <Stack sx={{ m: 4 }} spacing={3}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onToggleArchiveTodo={onToggleArchiveTodo}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Todos;
