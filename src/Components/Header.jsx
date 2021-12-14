/** @format */

import "./../index.css";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container maxWidth="100%" id="header">
      <Link
        to={"/"}
        style={{ textDecoration: "none", color: "black", textAlign: "center" }}
      >
        <h1 id="headline">Kochbuch der Extravaganz</h1>
      </Link>
    </Container>
  );
};

export default Header;
