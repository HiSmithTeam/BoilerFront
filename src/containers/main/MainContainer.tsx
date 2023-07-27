import Image from "next/image";
import { useEffect } from "react";
import Script from "next/script";
import BootPayTest from "@/components/bootPayTest/BootPayTest";
import SampleApi from "@/components/sampleApi/SampleApi";

export default function MainContainer() {
  useEffect(() => {
    console.log("window:::", window && window?.BootPay);
  }, []);
  return (
    <>
      <Script
        src="https://cdn.bootpay.co.kr/js/bootpay-3.3.1.min.js"
        type="application/javascript"
        strategy="beforeInteractive"
      ></Script>
      <main>
        <div>
          <BootPayTest />
        </div>
        ~~~이미지
        <Image
          src="/assets/next.svg"
          //   src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <SampleApi />
      </main>
    </>
  );
}
