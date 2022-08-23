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
    implements: [],
    version: 1,
  },
];

const useBlockListQuery = () => {
  const { isLoading, data } = useQuery(
    ["get-blocks"],
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
