import { IProps } from '@/types/global'
import ReactQueryProvider from './reactQueryProvider/ReactQueryProvider'
import RecoilProvider from './recoilProvider/RecoilProvider'

const Provider = ({ children }: IProps) => {
  return (
    <ReactQueryProvider>
      <RecoilProvider>{children}</RecoilProvider>
    </ReactQueryProvider>
  )
}
export default Provider
