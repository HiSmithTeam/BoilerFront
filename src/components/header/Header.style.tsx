import { layout } from "@/styles/mixin";
import { css } from "@emotion/react";

const style = css`
  background: mintcream;
  box-shadow: 0px 2px 5px 0 rgb(0 0 0 / 7%);
  position: fixed;
  top: 0;
  width: 100%;

  .header-pc {
    width: 100%;
    max-width: 1200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;

    button {
      &:hover {
        text-decoration: underline;
      }
    }

    .header-logo {
      width: 250px;
      height: 40px;
      display: block;
      cursor: pointer;
    }

    .header-menuList {
      display: flex;
      align-items: center;

      .header-menu {
        button {
          border: none;
          padding: 10px 30px;
        }
      }
    }

    .header-box {
      display: flex;
      flex-direction: column;
      width: 100px;

      .btn {
        &-regist {
          border: 1px solid red;
        }
        &-login {
          border: 1px solid blue;
        }
      }
    }
  }

  .header-mobile {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: mintcream;
    box-shadow: 0px 2px 5px 0 rgb(0 0 0 / 7%);

    button {
      &:hover {
        text-decoration: underline;
      }
    }

    .header-logo {
      width: 250px;
      height: 40px;
      display: block;
      cursor: pointer;
    }

    .header-menu {
    }

    .header-lnb {
      position: absolute;
      right: -100%;

      width: 100%;
      background: #e1e1e1;
      height: 100vh;
      top: 0;
      transition: 0.2s ease-in;

      &.open {
        right: 0;
      }
    }
  }

  @media ${layout.$breakpoint_mobile} {
    .header-pc {
      display: none;
    }
  }
  @media ${layout.$breakpoint_tablet} {
    .header-pc {
      display: none;
    }
  }
  @media ${layout.$breakpoint_desktop} {
    .header-mobile {
      display: none;
    }
  }
`;

export default style;
