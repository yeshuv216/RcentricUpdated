import Head from "next/head";
import Image from "next/image";

const AboutUs = () => {
  return (
    <main>
      <Head>
        <title>R Centric | About Us</title>
      </Head>
      <section className="relative">
        <Image
          src="/img/asset9.webp"
          height={1980}
          width={1080}
          alt="benefits"
          className="h-svh lg:h-screen w-screen object-cover object-center"
        />
      </section>

      <section
        data-fade-up
        className="grid place-items-center mt-16 lg:mt-24 container w-11/12"
      >
        <h1 className="title text-center">Introducing R Centric</h1>
        <p className="para text-center mt-6 lg:mt-8 w-full lg:w-[55%] text-pretty">
          R Centric is a software service company"
          <br /> <br />
          As an esteemed owner of an OMNIYAT residence, we introduce an
          opportunity to capitalise on the promising short-term rental market in
          Dubai. In crafting unforgettable experiences, R Centric stands as
          your trusted partner, dedicated to maximising the potential of your
          OMNIYAT residence.
        </p>
      </section>

      <section
        data-fade-up
        className="grid place-items-center my-16 lg:my-32 container w-11/12 "
      >
        <h1 className="title text-center">
          Welcome to a world where <br className="hidden lg:block" /> luxury
          meets legacy, <br className="hidden lg:block" /> and every stay is as
          exquisite <br className="hidden lg:block" /> memory.
        </h1>
      </section>
    </main>
  );
};

export default AboutUs;
