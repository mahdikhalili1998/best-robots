import { IIcon } from "@/types/Props";
import React from "react";

function NoTick({ width, height }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill="#CFD2E3" />
    </svg>
  );
}

export default NoTick;
