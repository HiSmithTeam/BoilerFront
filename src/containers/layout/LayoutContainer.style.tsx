// TODO: 스타일 파일명
// TODO: api , query 호출 방식 떼오기
// TODO: 모달 구현 방식 보기

import { layout } from "@/styles/mixin";
import { css } from "@emotion/react";

const style = css`
  .layout-content {
    overflow-y: auto;
  }

  padding-top: 70px;
  height: calc(100vh - 70px);

  @media ${layout.$breakpoint_mobile} {
  }
  @media ${layout.$breakpoint_tablet} {
  }
  @media ${layout.$breakpoint_desktop} {
    padding-top: 100px;
    height: calc(100vh - 100px);
  }
`;

export default style;
