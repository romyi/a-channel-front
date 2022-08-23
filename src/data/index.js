import { response as resA } from "./sequence_a";

const implicitRoutemapping = {
  Announcement: "*",
  Widgets: "/",
  Docs: "/docs",
};

const implicitRouteNamemapping = {
  "/": "Главная",
  "/docs": "Документы",
};

export { implicitRoutemapping, implicitRouteNamemapping, resA };
