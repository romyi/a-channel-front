import { useQuery } from "@tanstack/react-query";
import { docs } from "./useDocsMutation";

const useDocsQuery = (enable) => {
  const { isLoading, data, isRefetching, isPreviousData } = useQuery(
    ["view-doc"],
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(docs);
        }, 4000)
      ),
    { enabled: enable, keepPreviousData: true }
  );
  return { data, isLoading, isRefetching, isPreviousData };
};

export default useDocsQuery;
