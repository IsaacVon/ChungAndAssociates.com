import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar({ path }) {
  const classes = useStyles();

  const decideNavColor = () => {
    if(path === "/testamonials") return "testamonials"
    if(path === "/team") return "yellow" // white transparent
    if(path === "/") return "#73D3E1"
  }

  const navColor = decideNavColor()
  console.log (navColor)

  return (
    <div
      style={{
        flexGrow: 1,
        backgroundColor: navColor,
      }}
    >
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
