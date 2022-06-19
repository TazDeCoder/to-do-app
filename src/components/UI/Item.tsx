import React from "react";

import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));

export default Item;
