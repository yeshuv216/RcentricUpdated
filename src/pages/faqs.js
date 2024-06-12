import Head from "next/head";
import React from "react";

const faqData = [
  {
    ques: "What is the name of the Rental Programme Operator?",
    ans: "LIV Reside is the short-term rental entity managed by LIV Property Management LLC. In partnership with Me by Melia Dubai, LIV Reside will take care of the day-to-day management and operation of your luxury apartment.",
  },
  {
    ques: "What are the documents I need to submit to register in the Individual Rental Property Agreement?",
    ans: "Title Deed, Passport Copy, and UAE ID with the signature page, DTCM NOC, Checklist Acknowledgement, and signed Individual Rental Program Agreement are required. If you have appointed a POA, we will need a copy of the POA itself, as well as the Passport and UAE ID of your POA.",
  },
  {
    ques: "What if I have changed, removed, or added FF&E already to my apartment?",
    ans: "ME by Melia and LIV Reside will visit your unit with a detailed checklist to facilitate a comprehensive handover. We and/or your appointed representative, along with LIV Reside, will fill in the details on this checklist to ensure that the full list of FF&E, appliances, and OS&E is itemised and the status in your apartment is confirmed.",
  },
  {
    ques: "What should I do with my already installed internet package?",
    ans: "You will have to cancel this package. To comply with the Me by Melia Dubai Brand Standard, all rooms, apartments, and associated offerings are subject to the product guidelines set by Me by Melia Brand Guidelines.",
  },
  {
    ques: "What if I have already contracted my own yearly or monthly Facility Management Services? Can I continue using this company while being signed up for the Individual Rental Program Agreement?",
    ans: "Cancel your existing contracts with third-party facility management companies. LIV Reside will share a regular maintenance schedule as and when provided by Me by Melia Dubai.",
  },
  {
    ques: "What personal discounts can I give to friends or family members who will stay in my apartment?",
    ans: "Your apartment will be commercialised and operated by Me by Melia Dubai, just like any of their hotel rooms. No outside or owner discounts will apply, except for those that the Hotel Operator may run as promotions from time to time.",
  },
  {
    ques: "What if LIV Reside cannot generate acceptable revenue through this Programme? Can I terminate the Individual Rental Pool Agreement without facing punitive actions if I exclusively list my unit with LIV Property Services Co for long-term rent?",
    ans: "LIV Reside and LIV Property Services Co are two separate businesses and, as such, have no administrative control over the other. LIV Property Services Co, however, will still be able to assist you in finding a buyer for your apartment while under contract with LIV Reside for the Individual Rental Pool Agreement.",
  },
  {
    ques: "What are the charges that I should be aware of ?",
    ans: "a) 20% of the Gross Rental Program Revenue as a Property Management Fee. \nb) Capital Replacement Contribution and Capital Replacement Reserve. \n c) Operating Expenses.",
  },
  {
    ques: "What is the Capital Replacement Contribution & Capital Replacements Reserve?",
    ans: "Capital Replacement Contribution is 4% of your Gross Rental Program Revenue per year. \n\nThe Capital Replacement Reserve is the same amount as mentioned above and any balance thereafter at the end of each year. This fund remains with LIV Reside interest-free until the end of the agreement. At the end of the Individual Rental Program Agreement, any remaining balance will be refunded to the owner. \n\n This fund is reserved for replacing any FF&E within your apartment.",
  },
  {
    ques: "What are Operating Expenses?",
    ans: "This refers to consumables like shampoo, toilet paper, turn down amenities, etc., and replenishment of other supplies and items used for day-to-day operation of the apartment.",
  },
  {
    ques: "When can I stay in my apartment? Can I stay Christmas and the New Year’s holiday?",
    ans: "Your 14-day entitlement is subject to advance booking notice periods that LIV Reside and Me by Melia Dubai and will implement, with consideration for advanced notice blackout dates.",
  },
  {
    ques: "Where do I register or get more information on LIV Reside?",
    ans: "Visit our website www.livreside.ae to register your interest or email us at assetmanagement@omniyat.com or opus.concierge@clarityoam.com. You can also reach us by phone at +971 54 991 7488.",
  },
  {
    ques: "Who will let me know if my apartment meets the Brand Standard of the Hotel Operator?",
    ans: "LIV Reside and Me by Melia Dubai shall, at the time of the signature of your contract, conduct an inspection of your unit to ensure it meets the brand standard. If the FF&E and appliances are kept in the unit as per the SPA – the apartment is within brand standard. If they are not, you will be notified by LIV Reside to rectify the situation.",
  },
  {
    ques: "Who will pay for my or my family’s stay during my 14 days entitlement?",
    ans: "LIV Reside shall deduct from your share any operating costs that may be payable by you during your stay.\n\nIf you dined at any of our partner Food and Beverage operators within the hotel, you would need to pay at the restaurant. Only meals taken at Me Dubai outlets may be charged to your apartment.",
  },
  {
    ques: "Who should I complain to if I am not satisfied with how Me by Melia or LIV Reside Dubai is operating my apartment?",
    ans: "For prompt attention to your concerns, contact LIV Reside at assetmanagement@omniyat.com.\n\n Me by Melia Dubai is contracted by LIV Reside to operate the apartments. The Hotel Operator is not authorised by the Hotel Owner to enter into an agreement with the Unit Owner.",
  },
  {
    ques: "Who is going to pay for the Service Charges of my apartment levied by Mollak?",
    ans: "This bill will come to you directly from Mollak and shall be settled by you through the Mollak system. LIV Reside shall manage your property, ensuring that you make up-to-date payments through Mollak.\n\nWho is responsible for the monthly DEWA, Internet, and other utilities payment of my apartment? These are called Property Expenses on your Individual Rental Program Agreement. LIV Reside shall pay for the utilities on your behalf. The funds shall be taken out from the unit’s Gross Rental Programme Revenue.",
  },
  {
    ques: "Why choose LIV Reside?",
    ans: "Stay with the family, have regular access with a reputable operator, and enjoy a worry-free investment. Professional maintenance of your apartment ensures an annual, regular and dynamic income. \n\nLIV Reside is committed to maintaining the brand standard, not only for Me by Melia Dubai, by offering bespoke 5-star service to discerning guests. Additionally, LIV Reside ensures that Zaha Hadid’s legacy lives on. The Opus by OMNIYAT is one of Zaha Hadid’s last collaborations. Through sophisticated guest screening processes and meticulous preventative schedules, along with timely reactive maintenance, you can be assured that your exquisitely designed apartment will remain a sound investment for years to come.",
  },
  {
    ques: "Why does my unit need to have a Title Deed to register for the Individual Rental Agreement?",
    ans: "Your Title Deed is one of DTCM’s requirements to register your unit into the system.",
  },
  {
    ques: "Why am I or the subsequent owner (if I sell) only allowed to use LIV Reside as the short-term rental operator for my apartment",
    ans: "The developer, hotel owner, and service provider are bound to maintain the standards of the building, interiors, fixtures, facilities, and amenities not only to meet ME Dubai’s discerning standard but also to adhere to the standards expected of Zaha Hadid’s name. To ensure these standards are met, the terms set out in your SPA shall be transferred and assigned to the new owner. LIV Reside is the only authorised short-term rental service provider allowed at The Opus Residences.",
  },
  {
    ques: "How long is the Individual Rental Pool Agreement?",
    ans: "3 years",
  },
  {
    ques: "How do I register my apartment?",
    ans: "Call us on 04 511 5462 or email us at assetmanagement@omniyat.com.",
  },
  {
    ques: "How can I use my allocated parking space for personal purposes while under the Individual Rental Pool Agreement?",
    ans: "Your parking space is designated within the Individual Rental Pool Agreement for the use of your apartment guests. Valet services will ensure that guest vehicles are parked in your allocated space.",
  },
  {
    ques: "How can I sell my apartment whilst under the Individual Rental Pool Agreement?",
    ans: "You may still sell your apartment even if it is registered under the Individual Rental Pool Agreement – the process is the same as when you list your unit with LIV Property Services or any other agent of your choice. Please note, however, that the new owner shall be bound by the terms and conditions of your signed agreement until termination.",
  },
];

const QandA = () => {
  return (
    <main>
      <Head>
        <title>Liv Reside | Q&A</title>
      </Head>
      <div className="bg-black pt-24 lg:pt-36 pb-10 lg:pb-20">
        <div className="w-11/12 container px-4 lg:px-16">
          <h1 className="title text-white">Q & A</h1>
        </div>
      </div>

      <section className="pb-10 lg:pb-20">
        <div className="w-full">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="py-10 lg:py-16 flex justify-center whitespace-pre-line even:bg-[#fafafa]"
            >
              <div className="flex flex-col gap-5 w-11/12 container px-4 lg:px-16">
                <h3 className="text-xl">{item.ques}</h3>
                <p className="font-light text-pretty text-sm">{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default QandA;
