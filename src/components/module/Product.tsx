"use client";
import Image from "next/image";
import React, { useState } from "react";
import { product, product1 } from "@/constants/data";
import Crypto from "./Crypto";
import Warning from "../icon/Warning";

function Product() {
  const [code, setCode] = useState("");
  return (
    <div>
      <div className="mx-4 rounded-2xl bg-white p-6">
        {/* crown */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={"/image/crown.png"}
            width={64}
            height={64}
            className="size-[64px]"
            alt="crown"
            priority
          />
          <h2 className="text-2xl font-semibold">اشتراک یک ماهه برنزی</h2>
        </div>
        {/* product slide 1 */}
        <div className="mt-16 flex flex-col gap-6">
          {product.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <span className="font-semibold">{item.title}</span>
              <div className="flex items-center gap-1">
                <span className="text-lg font-extrabold">{item.value}</span>
                <span className="text-lightDark text-lg font-semibold">
                  {item.else}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* product slide 2 */}
      <div className="mx-4 mt-6 rounded-2xl bg-white p-6">
        <div className="mb-14 flex flex-col gap-6">
          {product1.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <span className="font-semibold">{item.title}</span>
              <div className="flex items-center gap-1">
                <span className="text-lg font-extrabold">{item.value}</span>
                <span className="text-lightDark text-lg font-semibold">
                  {item.else}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Crypto  */}
        <Crypto />
      </div>

      {/* off code  */}
      <div className="mx-4 mt-6 rounded-2xl bg-white p-6">
        <div className="flex flex-col justify-start gap-6">
          <h2>کد تخفیف</h2>
          <input
            value={code}
            type="text"
            placeholder="کد تخفیف را وارد کنید"
            className="placeholder:text-lightDark border-borderDark rounded-xl border-[1px] px-4 py-[10px] placeholder:text-sm"
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button className="bg-primaryGreen mt-6 w-full rounded-xl p-[10px] font-bold text-white">
          اعمال کد تخفیف
        </button>
      </div>

      {/* warning  */}
      <div className="relative">
        <div className="z-30 mx-4 mt-6 flex items-center justify-between gap-4 rounded-2xl bg-white p-6">
          <div>
            <Warning width={24} height={24} />
          </div>
          <p className="text-lightDark text-sm font-medium">
            بعد از پرداخت فاکتور به صفحه اشتراک های من بروید و با وارد کردن
            شماره حساب بروکر فارکس امکان دانلود متاتریدر 4 یا 5 برای شما فعال می
            شود.
          </p>
        </div>
        <div className="bg-primaryYellow absolute right-7 top-0 -z-10 -mr-4 rounded-2xl px-8 py-[62px]"></div>
      </div>
    </div>
  );
}

export default Product;
