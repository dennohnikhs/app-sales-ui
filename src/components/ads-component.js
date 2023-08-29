import { StyledAdSpace } from "@/styled-components";
import React, { useEffect } from "react";
const AdComponent = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <StyledAdSpace id="pagetop" className="adspace">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9043346163535096"
        data-ad-slot="9381777964"
        data-ad-format="auto"
      ></ins>
    </StyledAdSpace>
  );
};

export default AdComponent;

// import { StyledAdSpace } from "../styled-components";

// const AdSpace = () => {
//   useEffect(() => {
//     (window.adsbygoogle = window.adsbygoogle || []).push({});
//   }, []);

//   return (
//     <StyledAdSpace id="pagetop" className="adspace">
//       <script
//         async
//         src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
//       ></script>
//       <ins
//         className="adsbygoogle"
//         style={{ display: "block" }}
//         data-ad-client="ca-pub-9043346163535096"
//         data-ad-slot="9381777964"
//         data-ad-format="auto"
//       ></ins>
//     </StyledAdSpace>
//   );
// };

// export default AdSpace;
