import React from "react";

import { Container, Stack } from "@mui/material";

import TodoItem from "./TodoItem";
import Todo from "../../models/todo";

function Todos({ todos }: { todos: Todo[] }) {
  return (
    <Container sx={{ maxWidth: "45rem" }}>
      <Stack sx={{ p: 3 }} spacing={3}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Stack>
    </Container>
  );
}

export default Todos;
