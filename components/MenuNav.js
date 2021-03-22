import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Link, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import styles from "../styles/MenuNav.module.scss";

function MenuNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.menuContainer}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        <MenuIcon color="secondary" fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="/">
          <MenuItem onClick={handleClose}>Welcome</MenuItem>
        </Link>
        <Link href="/about">
          <MenuItem onClick={handleClose}>About me</MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link>
        <Link href="/programming">
          <MenuItem onClick={handleClose}>Programming</MenuItem>
        </Link>
        <Link href="/photograpy">
          <MenuItem onClick={handleClose}>Photography</MenuItem>
        </Link>
        <Link href="/digital-art">
          <MenuItem onClick={handleClose}>Digital Art</MenuItem>
        </Link>
        <Link href="/poetry">
          <MenuItem onClick={handleClose}>Poetry</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default MenuNav;
