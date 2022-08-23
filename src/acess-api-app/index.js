import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import usePayoutQuery from "./usePayoutQuery";

const queryClient = new QueryClient();

export { QueryClientProvider, queryClient, usePayoutQuery };
