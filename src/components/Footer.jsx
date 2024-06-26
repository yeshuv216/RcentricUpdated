import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./Icons";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] py-10 text-white">
      <div className="container flex w-11/12 flex-col items-center justify-center pb-[15px]">
        <Image
          src="/img/logo-gold.png"
          alt="rcentric"
          height={250}
          width={50}
          className="h-[35px] w-auto"
        />
        <div className="col-span-7 mt-8 h-[0.5px] w-full bg-white/20"></div>

        <div className="mt-8 grid w-full grid-cols-7 gap-y-8 text-sm font-light">
          <div className="col-span-7 flex flex-col gap-2.5 lg:col-span-1">
            <h1 className="text-lg">Links</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/career">Career</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="col-span-7 flex flex-col lg:col-span-2">
            <h1 className="text-lg">Locations</h1>
            <p className="mt-2.5 text-sm text-white/50">India | New Delhi</p>
            <p className="mt-2">
              R CENTRIC Private Limited <br />
              B1/H3, Ground Floor, Mathura Road, <br /> Mohan Co - operative,
              Industrial Area <br /> South East Delhi - 110044
            </p>
          </div>
          <div className="col-span-7 -mt-14 flex flex-col lg:col-span-2 lg:mt-0">
            <p className="mt-9 text-sm text-white/50">Middle East | Dubai</p>
            <p className="mt-2">
              R CENTRIC Information Technology <br /> Co.Sabha Build, Office :
              G-85, <br /> Jabal Ali Industrial First Dubai, UAE
            </p>
          </div>
          <div className="col-span-7 flex flex-col lg:col-span-2">
            <h1 className="text-lg">Subscribe To Our Newsletter</h1>
            <form className="mt-5">
              <input
                type="text"
                placeholder="yourname@gmail.com"
                className="w-full border-b-[0.5px] border-white bg-transparent pb-1 placeholder:text-white/40"
              />
              <button className="cta mt-5 bg-white font-light capitalize text-black">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-span-7 mt-8 h-[0.5px] w-full bg-white/20"></div>

        <div className="mt-10 flex w-full flex-col items-center justify-between gap-y-4 text-sm lg:flex-row">
          <p>2024 by R-centric</p>
          <div className="flex items-center gap-5">
            <Link href="/">Terms of use</Link>
            <Link href="/">Privacy</Link>
            <Link href="/">Legal</Link>
            <Link href="/">FAQ&apos;s</Link>
          </div>

          <div className="flex items-center gap-2 text-gold *:border-[0.3px] *:border-white *:p-1.5">
            <a href="">
              <LinkedinIcon className="size-4" />
            </a>
            <a href="">
              <TwitterIcon className="size-4" />
            </a>
            <a href="">
              <FacebookIcon className="size-4" />
            </a>
            <a href="">
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
