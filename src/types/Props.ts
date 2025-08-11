import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface IIcon {
  width: number;
  height: number;
  color?: string;
}
