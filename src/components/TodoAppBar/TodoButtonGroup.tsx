import React from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import {
  Sort as SortIcon,
  Inventory as InventoryIcon,
} from "@mui/icons-material";

function TodoButtonGroup({
  isArchives,
  isAscending,
  onToggleArchives,
  onToggleSort,
}: {
  isArchives: boolean;
  isAscending: boolean | null;
  onToggleArchives: () => void;
  onToggleSort: () => void;
}) {
  return (
    <Box sx={{ my: 1 }}>
      <Tooltip title={`Sort ${isAscending ? "descending" : "ascending"}`}>
        <IconButton aria-label="sort todos" onClick={onToggleSort}>
          <SortIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={`${isArchives ? "Hide" : "Show"} archives`}>
        <IconButton aria-label="todo archives" onClick={onToggleArchives}>
          <InventoryIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default TodoButtonGroup;
