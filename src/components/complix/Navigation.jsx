import React from "react";
import NavItem from "../ui/NavItem";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import "../../styles/complix/navigation.css";

function Navigation({ items, className }) {
  return (
    <div className={`nav ${className}`}>
      <Container className={"navContainer"}>
        <Logo />
        <NavItem items={items} />
      </Container>
    </div>
  );
}

export default Navigation;
