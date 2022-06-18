import React from "react";

import { Box, TextField, Tooltip, IconButton } from "@mui/material";

import { AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";

import Todo from "../../models/todo";

function NewTodo({ onNewTodo }: { onNewTodo: (newTodo: Todo) => void }) {
  const saveTodoDataHandler = () => {
    // TODO:
    // - [] sanitise input data
    // - [] handle sanitised input
  };

  return (
    <Box sx={{ flexGrow: 1 }} component={"form"}>
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
        />
        <Tooltip title="Add new todo">
          <IconButton sx={{ mx: 1 }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default NewTodo;
