import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { useSearchParams } from "next/navigation";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const useUTMSearchParams = () => {
  // eslint-disable-next-line no-unused-vars
  const searchParams = useSearchParams();

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

  var utmParams = `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_content=${utm_content}&utm_term=${utm_term}&utm_adgroup=${utm_adgroup}&gclid=${gclid}&msclkid=${msclkid}&fbclid=${fbclid}&li_fat_id=${li_fat_id}&twclid=${twclid}&gad=${gad}`;

  return utmParams;
};

export const useUTMSearchParamsOnNavigate = () => {
  const urlParams = useSearchParams();

  const params = {
    utm_source: urlParams.get("utm_source"),
    utm_medium: urlParams.get("utm_medium"),
    utm_campaign: urlParams.get("utm_campaign"),
    utm_content: urlParams.get("utm_content"),
    utm_term: urlParams.get("utm_term"),
    utm_adgroup: urlParams.get("utm_adgroup"),
    gclid: urlParams.get("gclid"),
    msclkid: urlParams.get("msclkid"),
    fbclid: urlParams.get("fbclid"),
    li_fat_id: urlParams.get("li_fat_id"),
    twclid: urlParams.get("twclid"),
    gad: urlParams.get("gad"),
  };

  let utms = "";
  for (const [key, value] of Object.entries(params)) {
    if (value !== null) {
      utms += `${key}=${value}&`;
    }
  }
  utms = utms.slice(0, -1);

  return utms;
};

export const downloadFile = (url) => {
  const pdfUrl = url;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.target = "_blank";
  link.download = url;
  link.click();
};
