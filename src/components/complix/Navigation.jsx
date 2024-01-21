import React, { useEffect, useState } from "react";
import NavItem from "../ui/NavItem";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import "../../styles/complix/navigation.css";

function Navigation({ items, className }) {
  const [isNavVisible, setNavVisibility] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setNavVisibility(scrollPosition > currentScrollPos || currentScrollPos < 10);
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={`nav ${className} ${isNavVisible ? "visible" : "hidden"}`}>
      <Container className={"navContainer"}>
        <Logo />
        <NavItem items={items} />
      </Container>
    </div>
  );
}

export default Navigation;
