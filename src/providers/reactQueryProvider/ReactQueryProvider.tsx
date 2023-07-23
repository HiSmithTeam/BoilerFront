import { IProps } from '@/types/global'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: true, // 기본값 true, false로 할 시 모든 쿼리 비활성화
      refetchOnWindowFocus: false, // 기본값 true, 윈도웊 포커스 되찾았을 때 쿼리 자동 재요청 여부
      retry: 3, // 기본값 3, 쿼리 요청 실패시 재시도 횟수
      retryDelay: 100, // 쿼리 재시도 요청시간
      onError: (error: any) => {
        // queries 에러
        console.log(':::react Query quries onError:::', error)
      },
    },
    mutations: {
      onError: (error: any) => {
        // queries 에러
        console.log(':::react Query mutations onError:::', error)
      },
    },
  },
})

const ReactQueryProvider = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
