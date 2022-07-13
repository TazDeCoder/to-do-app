import React from "react";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.mode === "dark" ? "#36454f" : "#f7f7f7",
  borderRadius: 7,
}));

function Wrapper({ children }: { children: React.ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Wrapper;
