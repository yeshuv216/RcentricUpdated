import { cn } from "@/lib/utils";
import { BookingFormContext } from "@/providers/BookingFormProvider";
import parsePhoneNumber from "libphonenumber-js";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CountrySelector, usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import CheveronDownIcon from "./icons/CheveronDownIcon";

const BookingForm = ({ isSideForm = false }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+971",
    phone: "",
    buildingName: "",
    propertyType: "",
  });
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsFromOpen } = useContext(BookingFormContext);

  const phoneInput = usePhoneInput({
    defaultCountry: "ae",
    onChange: (data) => {
      setFormValues({ ...formValues, countryCode: data.phone.trim() });
    },
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value.trim() });
  };

  const isPhoneValid = (phone) => {
    try {
      return parsePhoneNumber(phone)?.isValid();
    } catch (error) {
      return false;
    }
  };

  var today_date = new Date();
  var utm_source = searchParams.get("utm_source");
  var utm_medium = searchParams.get("utm_medium");
  var utm_campaign = searchParams.get("utm_campaign");
  var utm_content = searchParams.get("utm_content");
  var utm_term = searchParams.get("utm_term");
  var utm_adgroup = searchParams.get("utm_adgroup");
  var gclid = searchParams.get("gclid");
  var msclkid = searchParams.get("msclkid");
  var fbclid = searchParams.get("fbclid");
  var li_fat_id = searchParams.get("li_fat_id");
  var twclid = searchParams.get("twclid");
  var gad = searchParams.get("gad");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      buildingName,
      propertyType,
    } = formValues;

    if (!parsePhoneNumber(`${countryCode?.trim() + phone}`)?.isValid()) {
      console.log(countryCode.trim() + phone);
      alert("Enter a valid phone number!");
      return;
    }

    var apiUrl = `?Created Date=${today_date}&First Name=${firstName}&Last Name=${lastName}&Email=${email}&Country Code=${countryCode}&Phone Number=${phone}&Building Name=${buildingName}&Property Type=${propertyType}&UTM Source=${utm_source}&UTM Medium=${utm_medium}&UTM Campaign=${utm_campaign}&UTM content=${utm_content}&UTM Term=${utm_term}&UTM Adgroup=${utm_adgroup}&gclid=${gclid}&msclkid=${msclkid}&fbclid=${fbclid}&li_fat_id=${li_fat_id}&twclid=${twclid}&gad=${gad}`;

    try {
      fetch(`https://hooks.zapier.com/hooks/catch/8540544/30al7qm/${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => {
        if (res.status === 200) {
          setIsFromOpen(false);
          console.log("form sent");
          router.push("/thankyou");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className={cn(
        "flex flex-col ",
        isSideForm
          ? "w-full gap-2 lg:gap-2 mt-6 lg:mt-10"
          : "w-11/12 lg:w-[27%] gap-4 lg:gap-8 mt-12"
      )}
    >
      <div
        className={cn(
          "grid grid-cols-2 gap-5",
          isSideForm ? "gap-4 lg:gap-5" : ""
        )}
      >
        <div className={cn(isSideForm ? "inputContainer2" : "inputContainer")}>
          <label
            htmlFor="firstName"
            className={cn(isSideForm ? "inputLabel2" : "inputLabel")}
          >
            First Name*
          </label>
          <input
            type="text"
            required
            name="firstName"
            id="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            className={cn(isSideForm ? "inputItem2 border-b-2 border-white-500 lg:w-[200px] w-[200px]" : "inputItem border-b-2 border-white-500 lg:w-[200px] w-[200px]")}
          />
        </div>

        <div className={cn(isSideForm ? "inputContainer2" : "inputContainer")}>
          <label
            htmlFor="lastName"
            className={cn(isSideForm ? "inputLabel2" : "inputLabel")}
          >
            Last Name*
          </label>
          <input
            type="text"
            required
            name="lastName"
            id="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            className={cn(isSideForm ? "inputItem2 border-b-2 border-white-500 lg:w-[200px] w-[200px]" : "inputItem border-b-2 border-white-500 lg:w-[200px] w-[200px]")}
          />
        </div>
      </div>

      <div
        className={
          isSideForm
            ? "flex lg:grid lg:grid-cols-1 gap-5"
            : "flex lg:grid lg:grid-cols-2 gap-5"
        }
      >
        <div
          className={cn(
            isSideForm ? "inputContainer2" : "inputContainer",
            "w-[35%] lg:w-full"
          )}
        >
          <label
            htmlFor="phone"
            className={cn(isSideForm ? "inputLabel2" : "inputLabel")}
          >
            Phone*
          </label>
          <input
            required
            type="number"
            name="phone"
            id="phone"
            value={formValues.phone}
            onChange={handleChange}
            className={cn(isSideForm ? "inputItem2 border-b-2 border-white-500 lg:w-[200px] w-[200px]" : "inputItem border-b-2 border-white-500 lg:w-[200px] w-[200px]")}
          />
       </div>
       <div
          className={cn(
            isSideForm ? "inputContainer2" : "inputContainer",
            "w-[35%] lg:w-full"
          )}
        >
        <label
          htmlFor="email"
          className={cn(isSideForm ? "inputLabel2" : "inputLabel")}
        >
          Email Address*
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
          className={cn(isSideForm ? "inputItem2 border-b-2 border-white-500 lg:w-[200px] w-[200px]" : "inputItem border-b-2 border-white-500 lg:w-[200px] w-[200px]")}
        />
        </div>
      </div>

      <div
        className={
          isSideForm
            ? "flex lg:grid lg:grid-cols-1 gap-5"
            : "flex lg:grid lg:grid-cols-2 gap-5"
        }
      >
        <div
          className={cn(
            isSideForm ? "inputContainer2" : "inputContainer",
            "w-[35%] lg:w-full"
          )}
        >
          <label
            htmlFor="countryCode"
            className={cn(isSideForm ? "inputLabel2" : "inputLabel")}
          >
            Country Code*
          </label>
          <CountrySelector
            selectedCountry={phoneInput.country}
            onSelect={(country) => phoneInput.setCountry(country.iso2)}
            renderButtonWrapper={({ children, rootProps }) => (
              <button
                type="button"
                {...rootProps}
                className={cn(
                  "relative flex items-center bg-[#000] w-full text-sm",
                  isSideForm
                    ? "py-1.5 lg:py-2 pl-2 text-xs lg:text-sm"
                    : "py-2 lg:py-3 pl-2 lg:pl-4 "
                )}
              >
                {children}
                <div className="flex gap-2">
                  {phoneInput.phone}{" "}
                  <span className="hidden lg:block"> {rootProps.title}</span>
                </div>
                <CheveronDownIcon className="size-2.5 absolute right-2 top-1/2 -translate-y-1/2" />
              </button>
            )}
            dropdownStyleProps={{
              style: {
                top: "55px",
              },
            }}
          />
        </div>

      </div>

      <div className={cn(isSideForm ? "inputContainer2" : "inputContainer")}>
        <label
          htmlFor="buildingName"
          className={cn(isSideForm ? "inputLabel2" : "inputLabel")}
        >
          Interested In*
        </label>
        <select
          name="buildingName"
          id="buildingName"
          className={cn(isSideForm ? "inputItem2 border-b-2 border-white-500 lg:w-[500px] w-[500px]" : "inputItem border-b-2 border-white-500 lg:w-[500px] w-[500px]")}
          value={formValues.buildingName}
          onChange={handleChange}
          required
        >
          <option value=""></option>
        </select>
      </div>

      <div className={cn(isSideForm ? "inputContainer2" : "inputContainer")}>
        <label
          htmlFor="propertyType"
          className={cn(isSideForm ? "inputLabel2" : "inputLabel")}
        >
         Type Your Message
        </label>
        <select
          name="propertyType"
          id="propertyType"
          className={cn(isSideForm ? "inputItem2 border-b-2 border-white-500 lg:w-[500px] w-[500px]" : "inputItem border-b-2 border-white-500 lg:w-[500px] w-[500px]")}
          value={formValues.propertyType}
          onChange={handleChange}
          required
        >
        </select>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className={cn("cta", isSideForm ? "mt-4 lg:mt-6" : "mt-8 lg:mt-12")}
        >
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
