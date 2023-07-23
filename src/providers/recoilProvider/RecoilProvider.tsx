import { IProps } from '@/types/global'
import { RecoilRoot } from 'recoil'

const RecoilProvider = ({ children }: IProps) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default RecoilProvider
