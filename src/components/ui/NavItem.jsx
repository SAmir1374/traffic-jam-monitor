import React from "react";
import { Link } from "react-router-dom";

const defaultItems = [
  { id: 1, title: "ورود", link: "/" },
  { id: 2, title: "درباره ما", link: "/AboutUs" },
  { id: 3, title: "ارتباط با ما", link: "/ContactUs" },
];

function NavItem({ items = defaultItems, className, ...props }) {
  return (
    <ul>
      {items.map(({ id, title, link }) => (
        <li key={id}>
          <Link to={link}> {title} </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavItem;
