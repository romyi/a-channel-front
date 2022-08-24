import { useQuery } from "@tanstack/react-query";

const payouts = [
  { id: "123", amount: "200" },
  { id: "122", amount: "330" },
];

const usePayoutQuery = (enable = false) => {
  const { isLoading, data } = useQuery(
    ["view-payout"],
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(payouts);
        }, 1000)
      ),
    { enabled: enable }
  );
  return { data, isLoading };
};

export default usePayoutQuery;
