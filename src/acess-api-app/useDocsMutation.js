import { useMutation, useQueryClient } from "@tanstack/react-query";

export const docs = [
  {
    id: 1,
    title: "passport",
  },
  {
    id: 2,
    title: "driving license",
  },
];

const useDocsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (payload) =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(docs.push(payload));
        }, 1000)
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["view-doc"], {
          refetchActive: true,
        });
      },
      mutationKey: "update-doc",
    }
  );
};

export default useDocsMutation;
