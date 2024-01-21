import React from "react";
import { Outlet } from "react-router";
import GlassCover from "../components/ui/GlassCover";
import Container from "../components/ui/Container";
import Navigation from "../components/complix/Navigation";
import Footer from "../components/ui/Footer";
import BackGroundImg from "../components/ui/BackGroundImg";
import "../styles/layouts/wallImagesLayout.css";

const NavItems = [
  { id: 1, title: "خانه", link: "/ImageWall" },
  { id: 2, title: "گزارش ها", link: "/reports" },
  { id: 3, title: "ارتباط با ما", link: "/ContactUs" },
  { id: 4, title: "خروج", link: "/" },
];

function WallImagesLayout() {
  return (
    <BackGroundImg>
      <GlassCover className={"glassCoverWallImageLayout"}>
        <Navigation className={"navitationWallImageLayout"} items={NavItems} />
        <Container className={"containerWallImageLayout"}>
          <Outlet />
        </Container>
        <Footer className={"footerWallImageLayout"} />
      </GlassCover>
    </BackGroundImg>
  );
}

export default WallImagesLayout;
