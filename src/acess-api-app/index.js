import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import usePayoutQuery from "./usePayoutQuery";
import useBlockListQuery from "./useBlockListQuery";
import useDocsMutation from "./useDocsMutation";
import useDocsQuery from "./useDocsQuery";

const queryClient = new QueryClient();

export {
  QueryClientProvider,
  queryClient,
  usePayoutQuery,
  useBlockListQuery,
  useDocsMutation,
  useDocsQuery,
};
