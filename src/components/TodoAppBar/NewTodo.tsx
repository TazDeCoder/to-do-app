import React from "react";
import { useState } from "react";

import { Box, TextField, Tooltip, IconButton } from "@mui/material";

import { AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";

import Todo from "../../models/todo";

function TodoFactoryFunction(text: string): Todo {
  return {
    id: Math.random().toString(),
    text,
    dueDate: new Date(),
    archived: false,
  };
}

function NewTodo({
  isArchives,
  onNewTodo,
}: {
  isArchives: boolean;
  onNewTodo: (newTodo: Todo) => void;
}) {
  const [enteredText, setEnteredText] = useState("");

  const handleChangedText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(e.target.value);
  };

  const saveTodoDataHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Check validation of input
    const sanitisedInput = enteredText.trim();
    if (sanitisedInput.length === 0) return;
    // Handle sanitised input
    const todo = TodoFactoryFunction(sanitisedInput);
    onNewTodo(todo);
    // Clear input field
    setEnteredText("");
  };

  return (
    <Box sx={{ flexGrow: 1 }} component={"form"} onSubmit={saveTodoDataHandler}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ maxWidth: "64ch" }}
          label="Enter a task..."
          variant="outlined"
          margin="normal"
          fullWidth
          inputProps={{ maxLength: 64 }}
          value={enteredText}
          disabled={isArchives}
          onChange={handleChangedText}
        />
        <Tooltip title="Add new todo">
          <IconButton
            sx={{ mx: 1 }}
            disabled={isArchives}
            onClick={saveTodoDataHandler}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default NewTodo;
