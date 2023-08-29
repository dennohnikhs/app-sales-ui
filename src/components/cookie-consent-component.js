import React, { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const countryId = "us";

    window.addEventListener("load", function () {
      window.cookieconsent.initialise({
        palette: {
          popup: {
            background: "#000",
          },
          button: {
            background: "#f1d600",
          },
        },
        position: "top",
        static: true,
        content: {
          message: "Diese Website verwendet cookies",
          dismiss: "OK",
          link: "Mehr Infos",
        },
      });
    });
  }, []);

  return null; // or you can return some JSX if needed
};

export default CookieConsent;
