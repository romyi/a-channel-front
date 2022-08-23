import groupBy from "lodash/groupBy";

type CommonBlockAlias = "Announcement" | "Widgets" | "Docs"
type Path = `/${string}`
type ClientExplicitMappingBlocks = Record<CommonBlockAlias, Path>

const blockToRouteMap: ClientExplicitMappingBlocks = {
  Announcement: "/*",
  Widgets: "/",
  Docs: "/docs",
};

type ClientNavigationButtonName = "Главная" | "Документы"
type ClientExplicitMappingPaths = Record<Path, ClientNavigationButtonName>

const routeToTitleMap: ClientExplicitMappingPaths = {
  "/": "Главная",
  "/docs": "Документы",
};

type Predicate = "view" | "update" | "post"
type BusinessEntity = "task" | "document" | "user" | "activity"
type GrantAsApplicationAlias = `${Predicate}_${BusinessEntity}`

type BlockAsApplicationEntity = {
  title: string
  path?: Path
  version: number
  implements: GrantAsApplicationAlias[]
}

type BlockListGotFromMiddleware = BlockAsApplicationEntity[]

type BlocksGroupedUnderRoute = Record<Path, BlockAsApplicationEntity[]>

const makeRouteBlockMap = (arr: BlockListGotFromMiddleware): BlocksGroupedUnderRoute =>
  groupBy(
    arr?.map((el) => {
      if (!el.path) {
        return {
          ...el,
          path: blockToRouteMap[el.title],
        };
      } else {
        return el;
      }
    }),
    "path"
  );

type LinkItemForSidebar = {
  link: Path | string
  text: ClientNavigationButtonName
}
type LinkItems = LinkItemForSidebar[]

const combineLinkItems = (structure: BlocksGroupedUnderRoute): LinkItems => {
  const links: LinkItems = [];
  Object.keys(structure).map((key) =>
    links.push({ text: routeToTitleMap[key], link: key })
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
