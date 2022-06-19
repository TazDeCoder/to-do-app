import React from "react";
import { useState } from "react";

import { Typography, Checkbox, IconButton } from "@mui/material";

import {
  Delete as DeleteIcon,
  Archive as ArchiveIcon,
  Unarchive as UnarchiveIcon,
} from "@mui/icons-material";

import StatusBadge from "../UI/StatusBadge";
import Item from "../UI/Item";

import Todo from "../../models/todo";

function TodoItem({
  todo,
  onRemoveTodo,
  onUpdateTodo,
}: {
  todo: Todo;
  onRemoveTodo: (todo: Todo) => void;
  onUpdateTodo: (todo: Todo) => void;
}) {
  const { text, archived, dueDate, checked } = todo;

  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const status =
    dueDate.getTime() > new Date().getTime() ? "active" : "expired";

  const handleChangedChecked = () => {
    setIsChecked((prevState) => !prevState);
    onUpdateTodo({ ...todo, checked: !todo.checked });
  };

  return (
    <StatusBadge badgeContent={status} status={status}>
      <Item elevation={2}>
        <Checkbox
          aria-label="check todo"
          checked={isChecked}
          onChange={handleChangedChecked}
        />
        <Typography
          sx={{
            flexGrow: 1,
            whiteSpace: "noWrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </Typography>
        <IconButton aria-label="delete" onClick={() => onRemoveTodo(todo)}>
          <DeleteIcon />
        </IconButton>
        {archived ? (
          <IconButton
            aria-label="unarchive"
            onClick={() => onUpdateTodo({ ...todo, archived: false })}
          >
            <UnarchiveIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="archive"
            onClick={() => onUpdateTodo({ ...todo, archived: true })}
          >
            <ArchiveIcon />
          </IconButton>
        )}
      </Item>
    </StatusBadge>
  );
}

export default TodoItem;
