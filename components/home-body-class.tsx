"use client";

import { useEffect } from "react";

export function HomeBodyClass() {
  useEffect(() => {
    document.body.classList.add("rorum-home-page");

    return () => {
      document.body.classList.remove("rorum-home-page");
    };
  }, []);

  return null;
}
