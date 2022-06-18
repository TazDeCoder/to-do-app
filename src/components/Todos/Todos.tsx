import React from "react";

import { Container, Stack } from "@mui/material";

import TodoItem from "./TodoItem";
import Todo from "../../models/todo";

function Todos({ todos }: { todos: Todo[] }) {
  return (
    <Container sx={{ width: "50rem", maxWidth: "90%" }}>
      <Stack sx={{ m: 4 }} spacing={3}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Stack>
    </Container>
  );
}

export default Todos;
