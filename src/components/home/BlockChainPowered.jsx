import React from "react";
import Heading from "../utilities/Heading";
import Peragrap from "../utilities/Peragrap";
import Vechain from "../../assets/image/challangeCard/vechain.png";
import Vebetter from "../../assets/image/challangeCard/vebetter.png";
import Blockchain from "../../assets/image/challangeCard/blockchain.png";
import SubHeading from "../utilities/SubHeading";

const BlockChainPowered = () => {
  return (
    <section className="py-20 bg-subHeading">
      <div className="container mx-auto">
        <Heading
          className="!text-heading text-center mb-5 !text-[52px]"
          title="Blockchain Powered"
        />
        <Peragrap
          className="!text-heading w-3/5 mx-auto text-center"
          title="Blockchain technology forms the backbone of our platform, ensuring a secure, transparent, and efficient system for all participants."
        />
        <div className="grid grid-cols-3 items-center justify-between gap-10 mt-14">
          <div className="flex items-center flex-col">
            <div className="w-[40%] h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={Blockchain}
                alt=""
              />
            </div>
            <SubHeading className="my-5" title="Transparent and Safe" />
            <Peragrap
              className="!text-heading font-medium !text-sm text-center w-3/4"
              title="Blockchain provides a decentralized, immutable ledger, ensuring all rewards are transparent and verifiable. Your efforts and rewards are stored securely."
            />
          </div>
          <div className="flex items-center flex-col">
            <div className="w-[40%] h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={Vechain}
                alt=""
              />
            </div>
            <SubHeading className="my-5" title="Sustainable" />
            <Peragrap
              className="!text-heading font-medium !text-sm text-center w-3/4"
              title="Our platform is powered by VeChain. An energy-efficient blockchain platform spearheading the real-world adoption of blockchain technology."
            />
          </div>
          <div className="flex items-center flex-col">
            <div className="w-[40%] h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={Vebetter}
                alt=""
              />
            </div>
            <SubHeading className="my-5" title="Empowering Real Change" />
            <Peragrap
              className="!text-heading font-medium !text-sm text-center w-3/4"
              title="We are part of the VeBetter Ecosystem. VeBetter aims to take sustainability mainstream by unlocking value of collective sustainable actions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockChainPowered;
