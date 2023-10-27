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
      {circusPeople.map((circusPerson, index) => (
        <LazyLoadImage
          key={index}
          src={circusPerson.avatar.href}
          effect="blur"
          width="100%"
          alt={circusPerson.name}
          className="max-w-lg max-h-[60vh]"
        ></LazyLoadImage>
      ))}
    </>
  );
}
