import React from "react";
import Container from "./Container";
import "../../styles/ui/grid.css";

function Grid({ children, className, ...props }) {
  return (
    <Container>
      <div className={`grid ${className}`}>{children}</div>
    </Container>
  );
}

export default Grid;
