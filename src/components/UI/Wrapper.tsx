import React from "react";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.mode === "dark" ? "#36454f" : "#f7f7f7",
  borderRadius: 7,
}));

function Wrapper({ children }: { children: React.ReactNode }) {
  return <StyledBox>{children}</StyledBox>;
}

export default Wrapper;
