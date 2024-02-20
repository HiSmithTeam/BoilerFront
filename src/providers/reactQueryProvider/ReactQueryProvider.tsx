import { IProps } from "@/types/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useErrorBoundary = (error: unknown) => {
  const e = error as AxiosError;
  // switch (e?.response?.status) {
  //   case 401:
  //     return false;
  //   default:
  return true;
  // }
};

const onErrorHandler = (error: unknown) => {
  console.log(":::react Query onError:::", error);

  const e = error as AxiosError;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: true, // 기본값 true, false로 할 시 모든 쿼리 비활성화
      refetchOnWindowFocus: false, // 기본값 true, 윈도웊 포커스 되찾았을 때 쿼리 자동 재요청 여부
      retry: 3, // 기본값 3, 쿼리 요청 실패시 재시도 횟수
      retryDelay: 100, // 쿼리 재시도 요청시간

      onError: onErrorHandler,
      useErrorBoundary: useErrorBoundary,
    },
    mutations: {
      onError: onErrorHandler,
      useErrorBoundary: useErrorBoundary,
    },
  },
});

const ReactQueryProvider = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
