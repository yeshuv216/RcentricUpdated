import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1,
      touchMultiplier: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <GoogleTagManager gtmId="" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
