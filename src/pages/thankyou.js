import Head from "next/head";
import Link from "next/link";

const Thankyou = () => {
  return (
    <>
      <Head>
        <title>R Centric | Thank you</title>
      </Head>
      <div className="font-adobeGaramondPro relative h-[100vh] w-[100vw] bg-[url('/img/asset5.webp')] bg-cover bg-right bg-no-repeat lg:bg-center">
        <div className="flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 pt-5 text-center text-[25px] text-white">
          <h1 className="uppercase drop-shadow-2xl">Thank You</h1>
          <h1 className="w-[90%] text-pretty text-sm drop-shadow-md lg:w-[50%] lg:text-lg">
            We have received your details and one of our specialists will get in
            touch with you shortly.
          </h1>
          <Link
            href="/"
            className="mt-10 flex h-[40px] w-[140px] items-center justify-center bg-white text-base font-medium uppercase tracking-wider text-black lg:w-[220px]"
          >
            back to homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
