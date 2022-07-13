import React, { useState, useRef } from "react";
import { Box, TextField, Tooltip, IconButton } from "@mui/material";
import { AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";

import { Todo } from "../../models/index";

function TodoFactoryFunction(text: string, date: Date): Todo {
  return {
    id: Math.random().toString(),
    text,
    dueDate: date,
    checked: false,
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
  const dateRef = useRef<HTMLInputElement>(null);

  const handleChangedText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(e.target.value);
  };

  const saveTodoDataHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Check validation of inputs
    const sanitisedEnteredText = enteredText.trim();
    const sanitisedEnteredDate = new Date(dateRef.current!.value);
    if (sanitisedEnteredText.length === 0) return;
    // Handle sanitised inputs
    const todo = TodoFactoryFunction(
      sanitisedEnteredText,
      sanitisedEnteredDate
    );
    onNewTodo(todo);
    // Clear input fields
    setEnteredText("");
    dateRef.current!.value = "";
  };

  return (
    <Box sx={{ flexGrow: 1 }} component={"form"} onSubmit={saveTodoDataHandler}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{
            flexGrow: 1,
            width: { xs: "100%", sm: "initial" },
            maxWidth: "48ch",
            mx: 1,
          }}
          label="Enter a task..."
          variant="outlined"
          margin="normal"
          inputProps={{ maxLength: 64 }}
          disabled={isArchives}
          value={enteredText}
          onChange={handleChangedText}
        />
        <TextField
          sx={{ maxWidth: "48ch", mx: 1 }}
          label="Completion date"
          type="date"
          margin="normal"
          inputRef={dateRef}
          InputLabelProps={{
            shrink: true,
          }}
          disabled={isArchives}
        />
        <Tooltip title="Add new todo">
          <IconButton
            aria-label="new todo"
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
