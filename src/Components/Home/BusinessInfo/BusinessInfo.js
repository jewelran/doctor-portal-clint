import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const BusinessInfo = () => {
  const infosData = [
    {
      title: "Opening Hours",
      description: "we are open 7 days",
      icon: faClock,
      background: "primary",
    },
    {
      title: "Visit Our Location",
      description: "Brooklyn, ny 1003 USA",
      icon: faMapMarker,
      background: "dark",
    },
    {
      title: "Call us now",
      description: "+15697854124",
      icon: faPhone,
      background: "primary",
    },
  ];
  console.log(infosData);
  return (
    <section className="d-flex justify-content-center">
     <div className="w-75 row">
     {infosData.map((infos) => (
        <InfoCard info={infos}></InfoCard>
      ))}
     </div>
    </section>
  );
};

export default BusinessInfo;
