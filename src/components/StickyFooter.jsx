import { BookingFormContext } from "@/providers/BookingFormProvider";
import { useContext, useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import CallIcon from "./icons/CallIcon";
import Logo from "./icons/Logo";
import WhatsAppIcon from "./icons/WhatsappIcon";

const StickyFooter = () => {
  const windowScroll = useWindowScroll();
  const { setIsFromOpen } = useContext(BookingFormContext);
  const [scroll, setScroll] = useState(windowScroll.y);

  useEffect(() => {
    var footer = document.getElementById("footer");

    const scrolled = windowScroll.y;

    if (scrolled > scroll) {
      footer.classList.add("animate");
      footer.classList.add("sticked");
    } else {
      footer.classList.remove("animate");
      footer.classList.remove("sticked");
    }

    setScroll(scrolled);
  }, [windowScroll.y]);

  return (
    <div
      id="footer"
      className="fixed bottom-[-75px] left-0 flex justify-between items-center h-[40px] lg:h-[45px] bg-white w-full z-[20] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <div className="flex justify-between items-center container w-11/12">
        <Logo className="size-[60px] lg:size-[60px]" />
        <button
          onClick={() => setIsFromOpen(true)}
          className="absolute lg:hidden left-1/2 -translate-x-1/2 h-[35px] top-1/2 -translate-y-1/2 buttonItem w-[140px] border-black text-xs font-medium border-[1px]"
        >
          REGISTER INTEREST
        </button>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex gap-4 gap-y-2">
            <button
              onClick={() => setIsFromOpen(true)}
              className="font-medium h-[30px] text-[11px] w-[150px] border-black border-[1px]"
            >
              REGISTER INTEREST
            </button>
          </div>

          <div className="flex items-center gap-3 lg:gap-10">
            <a
              aria-label="Whatsapp"
              href="https://api.whatsapp.com/send?phone=971565054571&text=Hello,%20I%20am%20interested%20in%20the%20Liv%20Reside"
              target="_blank"
            >
              <div className="flex items-center gap-1">
                <WhatsAppIcon className="size-8" />
                <span className="uppercase text-[11px] hidden lg:block">
                  Whatsapp
                </span>
              </div>
            </a>
            <a aria-label="call" href="tel:+971 56 505 4571" target="_blank">
              <div className="flex items-center gap-1">
                <CallIcon className="size-5" />
                <span className="uppercase text-[11px] hidden lg:block">
                  Call
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
