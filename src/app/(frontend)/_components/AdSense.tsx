"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: { push: (args?: unknown) => void }[];
  }
}

export default function Adsense({
  slot,
  style = { display: "block" },
}: {
  slot: string;
  style?: React.CSSProperties;
}) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense load error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-1681196247196095"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
