import Head from "next/head";
import { IProps } from "@/types/global";
import Header from "@/components/header/Header";
import Lnb from "@/components/lnb/Lnb";
import style from "./LayoutContainer.style";
import { useRouter } from "next/router";

const LayoutContainer = ({ children }: IProps) => {
  const router = useRouter();

  return (
    <>
      <div className="layout-root" css={style}>
        <Header />
        <div className="layout-content">
          {router.pathname !== "/" && <Lnb />}
          <div className="content-root">{children}</div>
        </div>
      </div>
    </>
  );
};

export default LayoutContainer;
