import { useQuery } from "@tanstack/react-query";
import { docs } from "./useDocsMutation";

const useDocsQuery = (enable) => {
  const { isLoading, data, isRefetching } = useQuery(
    ["view-doc"],
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(docs);
        }, 1000)
      ),
    { enabled: enable }
  );
  return { data, isLoading, isRefetching };
};

export default useDocsQuery;
