import React, { useEffect, useState } from "react";
import { StyledCardBackground } from "../styled-components/index";
import FeaturedApp from "./card-space-component";
import useFetchFunction from "@/hooks/useFetchFuction";

const LatestAppsFeaturedApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetchApps();
  }, []);
  const { fetchApps } = useFetchFunction();

  useEffect(() => {
    fetchApps("http://localhost:5000/trending-apps", setApps);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-8 content-center ">
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

export default LatestAppsFeaturedApps;
