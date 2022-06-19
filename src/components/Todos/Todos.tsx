import React from "react";

import { Box, Stack } from "@mui/material";

import TodoItem from "./TodoItem";

import Todo from "../../models/todo";

function Todos({
  todos,
  onRemoveTodo,
  onUpdateTodo,
}: {
  todos: Todo[];
  onRemoveTodo: (todo: Todo) => void;
  onUpdateTodo: (todo: Todo) => void;
}) {
  return (
    <Box sx={{ width: "90%", maxWidth: "40rem", my: 3, mx: "auto" }}>
      <Stack spacing={3}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Todos;
