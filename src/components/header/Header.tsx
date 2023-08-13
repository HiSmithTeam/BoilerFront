import PATHNAME from "@/constants/pathname";
import style from "./Header.style";
import { headerMenu } from "@/constants/menuList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PC_SIZE } from "@/styles/mixin";

const Header = () => {
  const router = useRouter();

  const [lnbOpen, setLnbOpen] = useState<boolean>(false);

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  const handleLnb = (open: boolean) => {
    setLnbOpen(open);
  };

  const resizeEvent = () => {
    if (window) {
      const size = window.innerWidth;
      if (size < PC_SIZE) {
        setLnbOpen(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  return (
    <div className="header-root" css={style}>
      <div className="header-pc">
        <img
          className="header-logo"
          src="http://placehold.it/320x50?text=sample"
          alt="logo"
          onClick={() => handleMenuClick("/")}
        />
        <ul className="header-menuList">
          {headerMenu.map((menu) => {
            return (
              <li className="header-menu">
                <button
                  type="button"
                  onClick={() => handleMenuClick(menu.path)}
                >
                  {menu.label}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="header-box">
          <button
            type="button"
            className="btn-regist"
            onClick={() => handleMenuClick(PATHNAME.SAMPLE_JOIN)}
          >
            회원가입
          </button>
          <button
            type="button"
            className="btn-login"
            onClick={() => handleMenuClick(PATHNAME.SAMPLE_LOGIN)}
          >
            로그인
          </button>
        </div>
      </div>
      <div className="header-mobile">
        <img
          className="header-logo"
          src="http://placehold.it/320x50?text=sample"
          alt="logo"
          onClick={() => handleMenuClick("/")}
        />
        <img
          className="header-menu"
          src="http://placehold.it/30x30"
          alt="menu"
          onClick={() => handleLnb(true)}
        />

        <div className={`header-lnb ${lnbOpen ? "open" : ""}`}>
          <img
            className="header-menu"
            src="http://placehold.it/30x30?text=X"
            alt="menu"
            onClick={() => handleLnb(false)}
          />
          <div className="lnb-content">
            <ul className="header-menuList">
              <div className="header-box">
                <button
                  type="button"
                  className="btn-regist"
                  onClick={() => handleMenuClick(PATHNAME.SAMPLE_JOIN)}
                >
                  회원가입
                </button>
                <button
                  type="button"
                  className="btn-login"
                  onClick={() => handleMenuClick(PATHNAME.SAMPLE_LOGIN)}
                >
                  로그인
                </button>
              </div>
              {headerMenu.map((menu) => {
                return (
                  <li className="header-menu">
                    <button
                      type="button"
                      onClick={() => handleMenuClick(menu.path)}
                    >
                      {menu.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
