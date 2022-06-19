import React from "react";

import { Tooltip, IconButton } from "@mui/material";
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
    <React.Fragment>
      <Tooltip title={`Sort ${isAscending ? "descending" : "ascending"}`}>
        <IconButton onClick={onToggleSort}>
          <SortIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={`${isArchives ? "Hide" : "Show"} archives`}>
        <IconButton onClick={onToggleArchives}>
          <InventoryIcon />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
}

export default TodoButtonGroup;
