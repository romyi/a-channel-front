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

const mutationCache = queryClient.getMutationCache();

// https://github.com/TanStack/query/issues/2304
// status of useMutation not shared accross usages
// возможно в будущем подписки на mutations будут
// работать так же как и на queries. В треде амбассадор
// библиотеки TkDodo дает возможное решение: можно
// написать кастомный хук, который стучит в кэш и
// достает оттуда статус mutation по передаваемому
// ключу. Репозиторий с примером уже был стерт, но
// к счастью самостоятельно подумать получилось, вроде
// работает. Пример использования хука можно найти
// в SnackNotification
export const useIsMutationSuccessful = (key) => {
  if (mutationCache.mutations.length) {
    const mutations = mutationCache.mutations;
    const wantedMutation = mutations.find(
      (mutation) => mutation.options.mutationKey === key
    );
    if (wantedMutation) {
      return wantedMutation.state.status === "success";
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export {
  QueryClientProvider,
  queryClient,
  usePayoutQuery,
  useBlockListQuery,
  useDocsMutation,
  useDocsQuery,
};
