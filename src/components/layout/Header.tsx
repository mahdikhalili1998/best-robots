import Image from "next/image";
import React from "react";
import Menu from "../icon/Menu";
import Logo from "../icon/Logo";
import DownArrow from "../icon/DownArrow";

function Header() {
  return (
    <div className="mx-4">
      {/* logo & menu icon */}
      <div className="mt-6 flex items-center justify-between rounded-[100px] bg-white px-4 py-2">
        <Menu width={24} height={24} color="black" />
        <Logo width={44} height={40} />
      </div>
      {/* user profile */}
      <div className="mt-6 flex items-center justify-between rounded-2xl bg-white p-4">
        <div className="flex gap-2 items-center">
          <Image
            src={"/images/profilePhoto.png"}
            width={70}
            height={70}
            alt="profilePhoto"
            priority
            className="size-[70px]"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-lg font-bold">هادی شادی</span>
            <span className="text-lightDark text-sm">
              hadishadi555@gmail.com
            </span>
          </div>
        </div>
        <DownArrow width={24} height={24} />
      </div>
    </div>
  );
}

export default Header;
