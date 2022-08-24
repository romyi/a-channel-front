import { useQuery } from "@tanstack/react-query";

const blockListResponse = [
  {
    title: "Announcement",
    implements: ["view-payout"],
    version: 1,
  },
  {
    title: "Widgets",
    implements: ["view-payout", "view-activity"],
    version: 1,
  },
  {
    title: "Docs",
    implements: ["view-doc", "update-doc"],
    version: 1,
  },
  {
    title: "SnackNotification",
    implements: ["view-payout", "view-doc"],
    version: 1,
    path: "/*",
  },
];

const useBlockListQuery = () => {
  const { isLoading, data } = useQuery(
    ["view-blocks"],
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(blockListResponse);
        }, 4000)
      )
  );
  return { data, isLoading };
};

export default useBlockListQuery;
