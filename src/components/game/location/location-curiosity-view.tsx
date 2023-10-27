import { useEffect, useState } from "react";

import { dustCloudStarsURL } from "@/data/game-tokens";

export function LocationCuriosityView() {
  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
  });
  return (
    <>
      {showAnimation ? (
        <img src={dustCloudStarsURL.href}></img>
      ) : (
        "Marion really wanted that gif..."
      )}
    </>
  );
}
