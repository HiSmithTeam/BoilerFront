import { css } from "@emotion/react";

export const MOBILE_SIZE = 370;
export const TABLET_SIZE = 720;
export const PC_SIZE = 1200;

export const colors = {
  $primary: "#000000",
};

export const layout = {
  // Breakpoints
  $breakpoint_mobile: `(min-width: ${MOBILE_SIZE}px) and (max-width: ${
    TABLET_SIZE - 1
  }px)`, // 370
  $breakpoint_tablet: `(min-width: ${TABLET_SIZE}px) and (max-width:${
    PC_SIZE - 1
  }px)`, // 720
  $breakpoint_desktop: `(min-width: ${PC_SIZE}px)`, // 1024
};

export const ellipsis = () => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
};

/**
 * 멀티 라인 말줄임 스타일
 * @param toggleBool 텍스트 생략 여부
 * @param lineNumber 노출할 텍스트 줄 수
 */
export const multiEllipsis = (toggleBool: boolean, lineNumber: number) => {
  return css`
    ${toggleBool
      ? `
display:-webkit-box;
overflow:hidden;
-webkit-lint-clamp: ${lineNumber};
-webkit-box-oriend: vertical;
`
      : `
display: inherit;
overflow:visible;
-webkit-lint-clamp: none;
-webkit-box-oriend: unset;`}
  `;
};

export function rm_scroll() {
  return css`
    -ms-overflow-stype:none /* IE and Edge */
    scrollbar-width:none; /* Firefox */
    &::-webkit-scrollbar{
        display:none; /* Chrome, Safari, Opera */
    }
    `;
}

export const font = (
  size: string | number,
  weight: number,
  color: string,
  height: string | number = "normal"
) => {
  return css`
    font-size: ${size};
    font-weight: ${weight};
    color: ${color};
    line-height: ${height};
  `;
};

export const flex = (
  direction = "row",
  justify = "flex-start",
  align = "flex-start",
  flexType = ""
) => {
  return css`
    ${flexType === "inline-flex"
      ? `
        display: inline-flex;`
      : `display: -webkit-box;
      display: -ms-flexbox;
      display: flex;`}
    ${direction === "row" &&
    `
      -webkit-box-orient: horizontal;
      -ms-flex-direction: row;
      flex-direction: row;
      `}
      ${direction === "row-reverse" &&
    `
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
      `}
      ${direction === "column" &&
    `
      -webkit-box-orient: vertical;
      -ms-flex-direction: column;
      flex-direction: column;
      `}   
      ${direction === "column-reverse" &&
    `
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      `}   
      /* set justify-content */
      ${justify === "flex-start" &&
    `
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      `} 
      ${justify === "flex-end" &&
    `
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      `} 
      ${justify === "center" &&
    `
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      `} 
      ${justify === "space-between" &&
    `
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      `} 
      /* set align-items */
      ${align === "flex-start" &&
    `
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      `} 
      ${align === "flex-end" &&
    `
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      `} 
      ${align === "center" &&
    `
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      `} 
      ${align === "stretch" &&
    `
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      `} 
      ${align === "baseline" &&
    `
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
      `}
  `;
};
