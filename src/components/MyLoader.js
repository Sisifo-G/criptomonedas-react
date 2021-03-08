import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={0.7}
    width={550}
    height={200}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#224588"
    {...props}
  >
    <rect x="0" y="6" rx="3" ry="3" width="510" height="22" />
    <rect x="0" y="50" rx="3" ry="3" width="220" height="10" />
    <rect x="0" y="70" rx="3" ry="3" width="278" height="10" />
    <rect x="0" y="90" rx="3" ry="3" width="190" height="10" />
    <rect x="0" y="110" rx="3" ry="3" width="190" height="10" />
    {/* <circle cx="20" cy="20" r="20" /> */}
  </ContentLoader>
);

export default MyLoader;
