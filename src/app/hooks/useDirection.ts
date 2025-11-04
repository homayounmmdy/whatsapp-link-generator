"use client";

import { useParams } from "next/navigation";

export function useDirection() {
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === "fa";


  return {
    rtl: (rtlClass: string, ltrClass: string = "") =>
      isRTL ? rtlClass : ltrClass,
  };
}
