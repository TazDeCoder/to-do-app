import styled from "@mui/material/styles/styled";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));

export default Item;
