import React from "react";

import { Tooltip, IconButton } from "@mui/material";
import {
  Sort as SortIcon,
  Inventory as InventoryIcon,
} from "@mui/icons-material";

function TodoButtonGroup() {
  // TODO:
  // - [] add state to manage sort method
  // - [] add handler to show archived todos

  return (
    <React.Fragment>
      <Tooltip title="Sort ascending">
        <IconButton>
          <SortIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Show archives">
        <IconButton>
          <InventoryIcon />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
}

export default TodoButtonGroup;
