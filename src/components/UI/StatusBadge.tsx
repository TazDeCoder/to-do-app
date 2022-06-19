import React from "react";

import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";

interface StatusBadgeProps {
  status: "expired" | "active";
}

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

export default StatusBadge;
