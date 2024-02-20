import Image from "next/image";
import { useEffect } from "react";
import Script from "next/script";
import BootPayTest from "@/components/bootPayTest/BootPayTest";
import { useGetMemberInfoMutation } from "@/apis/sample/query";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";

export default function MainContainer() {
  const { mutate } = useGetMemberInfoMutation();

  const handleClick = () => {
    mutate(
      { memberId: "string" },
      {
        onSuccess: (data) => {
          console.log("::: SUCCESS :::", data);
        },
        onError: (error) => {
          console.log("::: ERROR :::", error);
        },
      }
    );
  };

  useEffect(() => {
    // console.log("window:::", window && window?.BootPay);
  }, []);

  // const { isLoading, data } = useQuery(["testtest"], () => {
  //   return axiosInstance
  //     .get(
  //       "/member?authCode=string&status=string&keyword=string&page=0&size=10&direction=ASC"
  //     )
  //     .then((res) => {
  //       return res;
  //     });
  // });

  return (
    <>
      <Script
        src="https://cdn.bootpay.co.kr/js/bootpay-3.3.1.min.js"
        type="application/javascript"
        strategy="beforeInteractive"
      ></Script>
      <main>
        <div className="content-wrap">
          {/** {JSON.stringify(data)}*/}
          <div className="content">
            <button onClick={handleClick}>멤버 정보 조회 api 테스트</button>
          </div>
        </div>
        <div className="content-wrap">
          <div className="content">
            <BootPayTest />
          </div>
        </div>
        <div className="content-wrap">
          <div className="content">
            {" "}
            <Image
              src="/assets/next.svg"
              //   src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}
