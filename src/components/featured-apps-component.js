import React, { useEffect, useState } from "react";
import FeaturedApp from "./card-space-component";
import { StyledCardBackground } from "../styled-components/index";
import useFetchFunction from "@/hooks/useFetchFuction";

const FeaturedApps = () => {
  const [apps, setApps] = useState([]);
  const { fetchApps } = useFetchFunction();
  useEffect(() => {
    fetchApps(url, setApps);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8 content-center ">
      {apps.map((app) => (
        <StyledCardBackground key={app.appName} className="py-1">
          <FeaturedApp
            appIcon={app.icon}
            appName={app.title}
            appDev={app.developer}
            priceDiscount={app.free}
            priceNew={app.price}
          />
        </StyledCardBackground>
      ))}
    </div>
  );
};

export default FeaturedApps;
