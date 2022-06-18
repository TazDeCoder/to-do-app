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
  status?: "expired" | "active" | "null";
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

function TodoItem({ todo }: { todo: Todo }) {
  // TODO:
  // - [] show status of todo in badge
  // - [] add handler to remove todo
  // - [] add handler to archive/unarchive todo

  const { text, archived } = todo;

  return (
    <StatusBadge badgeContent="null">
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
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        {archived ? (
          <Tooltip title="Archive todo">
            <IconButton aria-label="archive">
              <ArchiveIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Unarchive todo">
            <IconButton aria-label="unarchive">
              <UnarchiveIcon />
            </IconButton>
          </Tooltip>
        )}
      </Item>
    </StatusBadge>
  );
}

export default TodoItem;
