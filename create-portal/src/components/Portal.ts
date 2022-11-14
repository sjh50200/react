import React, { ReactNode } from "react";
import ReactDom from "react-dom";

export interface ModalPortalProps {
  children: ReactNode | string;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById("modal") as HTMLElement;
  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
