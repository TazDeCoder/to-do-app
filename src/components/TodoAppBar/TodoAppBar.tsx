import React from "react";

import { AppBar, Toolbar } from "@mui/material";

import NewTodo from "./NewTodo";
import TodoButtonGroup from "./TodoButtonGroup";
import Todo from "../../models/todo";

function TodoAppBar({ onNewTodo }: { onNewTodo: (newTodo: Todo) => void }) {
  return (
    <AppBar
      sx={{ maxWidth: "90%", mx: "auto" }}
      position="static"
      color="transparent"
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <NewTodo onNewTodo={onNewTodo} />
        <TodoButtonGroup />
      </Toolbar>
    </AppBar>
  );
}

export default TodoAppBar;
