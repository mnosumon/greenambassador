import React from "react";
import SubHeading from "../utilities/SubHeading";
import PrimaryBTN from "../utilities/PrimaryBTN";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r pt-24 from-[#009b72] to-[#046865]">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 border-b border-lineColor pb-28">
          <div>
            <SubHeading
              className="text-2xl text-subHeading text-center mb-8"
              title="About"
            />
            <div className="flex flex-col gap-3">
              <button className="navLinkStyle text-linkColor hover:text-subHeading !p-0">
                get started
              </button>
              <button className="navLinkStyle text-linkColor hover:text-subHeading">
                about
              </button>
            </div>
          </div>
          <div>
            <SubHeading
              className="text-2xl text-subHeading text-center mb-8"
              title="Powered by"
            />
            <div className="flex flex-col gap-3">
              <button className="navLinkStyle text-linkColor hover:text-subHeading !p-0">
                VeBetterDAO
              </button>
              <button className="navLinkStyle text-linkColor hover:text-subHeading">
                VeWorld
              </button>
              <button className="navLinkStyle text-linkColor hover:text-subHeading">
                VeChain
              </button>
            </div>
          </div>
          <div>
            <SubHeading
              className="text-2xl text-subHeading text-center mb-8"
              title="Connect"
            />
            <div className="flex flex-col gap-3">
              <button className="navLinkStyle text-linkColor hover:text-subHeading !p-0">
                Contact
              </button>
              <button className="navLinkStyle text-linkColor hover:text-subHeading">
                Twitter
              </button>
              <button className="navLinkStyle text-linkColor hover:text-subHeading">
                Telegram
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 py-5">
          <h5 className="text-base text-linkColor font-nunito">
            &copy;2024 GreenAmbassadorChallenge.com
          </h5>
          <span className="text-linkColor font-bold">-</span>
          <Link className="navLinkStyle text-linkColor hover:text-subHeading !p-0 text-lg ">
            terms
          </Link>
          <span className="text-linkColor font-bold">|</span>
          <Link className="navLinkStyle text-linkColor hover:text-subHeading !p-0 text-lg ">
            Privacy
          </Link>
          <span className="text-linkColor font-bold">|</span>
          <Link className="navLinkStyle text-linkColor hover:text-subHeading !p-0 text-lg ">
            Cookie Preferences
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
