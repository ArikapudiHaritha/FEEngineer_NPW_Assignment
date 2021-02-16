import React from "react";

const useDeviceDetect = () => {
  const [isMobile, setMobile] = React.useState(false);

  const updateMobile = () => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;

    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    setMobile(mobile);
  };

  React.useEffect(() => {
    updateMobile();
  }, []);

  window.addEventListener("resize", () => {
    updateMobile();
  });

  return { isMobile };
};

export default useDeviceDetect;
