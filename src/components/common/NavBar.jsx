import { Menu } from "semantic-ui-react";
import { logo } from "../../constants/constant";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";

const NavBar = () => {
  return (
    <Menu fixed="top">
      <Menu.Item>
        <img src={logo} alt="logo" style={{ width: 100, height: 50 }} />
      </Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" />
      <Menu.Item name="Recipes" as={Link} to="/recipes" />
    </Menu>
  );
};

export default NavBar;
