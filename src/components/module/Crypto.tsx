"use client";

import { crypto } from "@/constants/data";
import { IClick } from "@/types/state";
import { useState } from "react";
import BlueTick from "../icon/BlueTick";

function Crypto() {
  const [isClick, setIsClick] = useState<IClick>({
    isClick: false,
    id: null,
  });
  const selectHandler = (id: number) => {
    setIsClick({
      isClick: true,
      id,
    });
  };
  return (
    <div>
      <h2 className="text-lightDark text-xs">رمز ارز های قابل پرداخت:</h2>
      {/* crypto */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {crypto.map((item, index) => (
          <div
            key={index}
            className={`${isClick.isClick && isClick.id === item.id ? "border-lightBlue" : "border-borderDark"} flex items-center gap-4 rounded-lg border-[1px] border-solid px-4 py-2`}
            onClick={() => selectHandler(item.id)}
          >
            {isClick.isClick && isClick.id === item.id ? (
              <BlueTick width={22} height={22} />
            ) : (
              <span>{item.thick}</span>
            )}
            <div className="flex items-center gap-2">
              <span
                className={`${isClick.isClick && isClick.id === item.id ? "text-lightBlue" : "text-lightDark"} `}
              >
                {item.logo}
              </span>
              <span
                className={`${isClick.isClick && isClick.id === item.id ? "text-lightBlue" : "text-lightDark"} text-xs`}
              >
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* pay button  */}
      <button className="text-primaryGreen border-primaryGreen mt-6 w-full rounded-xl border-[1px] p-3">
        پرداخت
      </button>
    </div>
  );
}

export default Crypto;
