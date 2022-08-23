import groupBy from "lodash/groupBy";

const implicitRoutemapping = {
  Announcement: "*",
  Widgets: "/",
  Docs: "/docs",
};

const implicitRouteNamemapping = {
  "/": "Главная",
  "/docs": "Документы",
};

const makeRouteBlockMap = (arr) =>
  groupBy(
    arr?.map((el) => {
      if (!el.path) {
        return {
          ...el,
          path: implicitRoutemapping[el.title],
        };
      } else {
        return el;
      }
    }),
    "path"
  );

const combineLinkItems = (structure) => {
  const links = [];
  Object.keys(structure).map((key) =>
    links.push({ text: implicitRouteNamemapping[key], link: key })
  );
  return links;
};

const useMeta = (response) => {
  const routeBlockMap = makeRouteBlockMap(response);
  const linkitems = combineLinkItems(routeBlockMap);
  const routeentries = Object.entries(routeBlockMap);

  return { linkitems, routeentries };
};

export default useMeta;
