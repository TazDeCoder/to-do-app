import React from "react";

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
  onToggleArchiveTodo,
}: {
  todo: Todo;
  onRemoveTodo: (todo: Todo) => void;
  onToggleArchiveTodo: (todo: Todo) => void;
}) {
  const { text, archived, dueDate, checked } = todo;

  const status =
    dueDate.getTime() > new Date().getTime() ? "active" : "expired";

  return (
    <StatusBadge badgeContent={status} status={status}>
      <Item elevation={2}>
        <Checkbox aria-label="check todo" checked={checked} />
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
            onClick={() => onToggleArchiveTodo(todo)}
          >
            <UnarchiveIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="archive"
            onClick={() => onToggleArchiveTodo(todo)}
          >
            <ArchiveIcon />
          </IconButton>
        )}
      </Item>
    </StatusBadge>
  );
}

export default TodoItem;
