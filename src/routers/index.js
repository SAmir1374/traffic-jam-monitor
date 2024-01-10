import { renderRoutes } from "./generate-routes";

// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import WallImagesLayout from '../layouts/WallImagesLayout'

// Pages
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import MonitoringPage from "../pages/MonitoringPage";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/",
        isPublic: true,
      },
      {
        name: "contact",
        title: "Contact page",
        component: Contact,
        path: "/ContactUs",
        isPublic: true,
      },
      {
        name: "aboutUs",
        title: "AboutUs page",
        component: AboutUs,
        path: "/AboutUs",
        isPublic: true,
      },
      {
        name: "notFound",
        title: "NotFound page",
        component: NotFound,
        path: "/*",
        isPublic: true,
      },
    ],
  },
  {
    layout: WallImagesLayout,
    routes: [
      {
        name: "MonitoringPage",
        title: "Monitoring page",
        component: MonitoringPage,
        path: "/ImageWall",
        isPublic: true,
      },
    ],
  },
];

export const Routes = renderRoutes(routes);