import { useUTMSearchParams } from "@/lib/utils";
import parsePhoneNumber from "libphonenumber-js";
import { useState } from "react";
import { CountrySelector, usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CheveronDown } from "./Icons";
import Link from "next/link";

const FooterForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+971",
    phone: "",
    message: "",
  });

  const utmParams = useUTMSearchParams();

  const phoneInput = usePhoneInput({
    defaultCountry: "ae",
    onChange: (data) => {
      setFormValues({ ...formValues, countryCode: data.phone.trim() });
    },
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value.trim() });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, countryCode, phone, message } =
      formValues;

    if (!parsePhoneNumber(`${countryCode?.trim() + phone}`)?.isValid()) {
      console.log(countryCode.trim() + phone);
      alert("Enter a valid phone number!");
      return;
    }

    var apiUrl = `?First Name=${firstName}&Last Name=${lastName}&Email=${email}&Country Code=${countryCode}&Phone Number=${phone}&message=${message}&${utmParams}`;

    try {
      fetch(`https://hooks.zapier.com/hooks/catch/8540544/2yl7sod/${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => {
        if (res.status === 200) {
          console.log("form sent");
          alert("Your Response Has Been Submitted!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative w-full">
      <video
        src="/videos/footer.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="h-[75vh] w-full object-cover object-center lg:h-[85vh]"
      >
        <source src="/videos/footer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/80">
        <div className="flex w-full flex-col items-center text-white">
          <h1 className="title text-center text-white">
            Have a Project in Mind
          </h1>
          <p className="para mt-3 lg:mt-6 text-white">Lets Work Together</p>
          <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-11/12 flex-col items-center gap-6 lg:mt-10 lg:w-[35%] lg:gap-8"
          >
            <div className="grid w-full grid-cols-2 gap-x-6 lg:gap-x-10">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                required
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleChange}
                className="footerInput"
              />
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                id="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className="footerInput"
              />
            </div>

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              className="footerInput"
            />

            <div className={"flex w-full gap-4 lg:gap-5"}>
              <div
                className={"w-[35%] min-w-[110px] lg:w-[20%] lg:min-w-[120px]"}
              >
                <label htmlFor="countryCode" className="sr-only">
                  Country Code*
                </label>
                <CountrySelector
                  selectedCountry={phoneInput.country}
                  onSelect={(country) => phoneInput.setCountry(country.iso2)}
                  renderButtonWrapper={({ children, rootProps }) => (
                    <button
                      type="button"
                      {...rootProps}
                      className={
                        "relative flex w-full items-center border-b border-white pb-1 text-xs lg;text-sm"
                      }
                    >
                      {children}
                      <div className="flex gap-2">{phoneInput.phone}</div>
                      <CheveronDown className="absolute right-2 top-1/2 size-2.5 -translate-y-1/2" />
                    </button>
                  )}
                  dropdownStyleProps={{
                    style: {
                      top: "55px",
                    },
                  }}
                />
              </div>

              <div className="w-[65%] lg:w-[80%]">
                <label htmlFor="phone" className="sr-only">
                  Phone Number*
                </label>
                <input
                  required
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Mobile Number"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="footerInput"
                />
              </div>
            </div>

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <input
              required
              type="text"
              name="message"
              placeholder="Type your message"
              id="message"
              value={formValues.message}
              onChange={handleChange}
              className="footerInput"
            />

            <div className="flex w-full items-center justify-start gap-2">
              <input
                type="checkbox"
                name="privacyPolicy"
                className="accent-gold"
              />
              <label htmlFor="privacyPolicy" className="text-sm">
                You agree to our friendly{" "}
                <Link href="/privacy-policy" className="text-gold">
                  privacy policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="cta bg-white font-light capitalize text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
