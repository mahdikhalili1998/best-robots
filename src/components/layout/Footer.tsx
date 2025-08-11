import React from "react";
import Instagram from "../icon/Instagram";
import Logo from "../icon/Logo";
import WhatsApp from "../icon/WhatsApp";
import Telegram from "../icon/Telegram";
import { footer } from "@/constants/data";
import GreenDisk from "../icon/GreenDisk";
import CopyRight from "../icon/CopyRight";

function Footer() {
  return (
    <div className="bg-footerBg mt-24 p-6">
      <div className="flex items-start justify-between">
        {/* logo &  Communication method    */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo width={140} height={170} />
          <div className="flex items-center gap-4">
            <span className="border-primaryGreen rounded-xl border-[1px] bg-white p-[10px]">
              <Telegram width={24} height={24} />
            </span>
            <span className="border-primaryGreen rounded-xl border-[1px] bg-white p-[10px]">
              <WhatsApp width={24} height={24} />
            </span>
            <span className="border-primaryGreen rounded-xl border-[1px] bg-white p-[10px]">
              {" "}
              <Instagram width={24} height={24} />
            </span>
          </div>
        </div>
        {/* links  */}
        <ul className="items-strat flex flex-col justify-center gap-6">
          {footer.map((item, index) => (
            <li
              className="flex items-center gap-2 text-sm font-normal"
              key={index}
            >
              <GreenDisk width={9} height={9} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 mt-10">
        <CopyRight />
        <p className="text-sm font-light">
          تمام حقوق مادی و معنوی این وب سایت متعلق به وب روبوتس است.
        </p>
      </div>
    </div>
  );
}

export default Footer;
