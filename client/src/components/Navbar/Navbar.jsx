import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Menu>
        <MenuButton as={Button} colorScheme="blue">
          Menu
        </MenuButton>
        <MenuList style={{ backgroundColor: "#efefef" }}>
          <MenuGroup title="Menu">
            <MenuItem>My Account</MenuItem>
            <MenuItem>About us </MenuItem>
            <MenuItem>Contact </MenuItem>
            <MenuItem>User </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <Link to="/" className={styles.link}>
        Home
      </Link>

      <Link to="/dashboard" className={styles.link}>
        Dashboard
      </Link>
      <Link to="/login" className={styles.link}>
        Login
      </Link>
    </div>
  );
};
