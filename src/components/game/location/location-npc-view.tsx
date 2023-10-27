/* eslint-disable security/detect-object-injection */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  type TAvailableCircusPeople,
  gameCircusPeople,
} from "@/data/circus-people";

interface LocationNpcViewProperties {
  location: TAvailableCircusPeople;
}
export function LocationNpcView({ location }: LocationNpcViewProperties) {
  // TODO: fix this type mess
  const circusPeople = gameCircusPeople[location];
  return (
    <>
      <LazyLoadImage
        src={circusPeople.avatar.href}
        loading="lazy"
        effect="blur"
        height={300}
        alt={circusPeople.name}
      ></LazyLoadImage>
    </>
  );
}
