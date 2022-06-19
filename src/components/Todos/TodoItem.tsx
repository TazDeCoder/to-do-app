import React from "react";

import { styled } from "@mui/material/styles";
import {
  Badge,
  Paper,
  Typography,
  Checkbox,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Archive as ArchiveIcon,
  Unarchive as UnarchiveIcon,
} from "@mui/icons-material";

import Todo from "../../models/todo";

interface StatusBadgeProps {
  status: "expired" | "active";
}

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));

const StatusBadge = styled(Badge)<StatusBadgeProps>(({ theme, status }) => ({
  minWidth: "15rem",
  height: "4rem",
  color: "#fff",
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.text.secondary,
  },
  ...(status === "expired" && {
    "& .MuiBadge-badge": {
      backgroundColor: theme.palette.warning.light,
    },
  }),
  ...(status === "active" && {
    "& .MuiBadge-badge": {
      backgroundColor: theme.palette.success.light,
    },
  }),
}));

function TodoItem({
  todo,
  onRemoveTodo,
  onToggleArchiveTodo,
}: {
  todo: Todo;
  onRemoveTodo: (todo: Todo) => void;
  onToggleArchiveTodo: (todo: Todo) => void;
}) {
  const { text, archived, dueDate } = todo;

  const status =
    dueDate.getTime() > new Date().getTime() ? "active" : "expired";

  return (
    <StatusBadge badgeContent={status} status={status}>
      <Item elevation={2}>
        <Checkbox aria-label="check todo" />
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
        <Tooltip title="Delete todo">
          <IconButton aria-label="delete" onClick={() => onRemoveTodo(todo)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        {archived ? (
          <Tooltip title="Unarchive todo">
            <IconButton
              aria-label="unarchive"
              onClick={() => onToggleArchiveTodo(todo)}
            >
              <UnarchiveIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Archive todo">
            <IconButton
              aria-label="archive"
              onClick={() => onToggleArchiveTodo(todo)}
            >
              <ArchiveIcon />
            </IconButton>
          </Tooltip>
        )}
      </Item>
    </StatusBadge>
  );
}

export default TodoItem;
