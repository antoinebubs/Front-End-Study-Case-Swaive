import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "absolute", // Fix the position to the right
  right: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "12ch",
    "&:focus": {
      width: "20ch",
    },
  },
}));

type SearchAppBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  drawerOpen: boolean;
};

export default function SearchAppBar(props: SearchAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              position: "relative",
              justifyContent: props.drawerOpen ? "center" : "flex-start",
              transition: "justify-content 0.3s ease",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "red",
                fontWeight: "bold",
                fontSize: "24px",
                position: "relative",
                transform: `translateX(${props.drawerOpen ? "0" : "-20px"})`,
                transition: "transform 0.3s ease",
              }}
            >
              SWAIVEFLIX
            </Typography>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={props.query}
              onChange={(e) => props.setQuery(e.target.value)}
            />
            {props.query && (
              <IconButton
                size="small"
                onClick={() => props.setQuery("")}
                sx={{ color: "white" }}
              >
                <Close />
              </IconButton>
            )}
          </Search>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
