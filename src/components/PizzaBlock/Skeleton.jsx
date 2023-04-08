import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="130" r="130" />
    <rect x="0" y="273" rx="0" ry="0" width="280" height="27" />
    <rect x="1" y="316" rx="10" ry="10" width="280" height="88" />
    <rect x="121" y="414" rx="25" ry="25" width="153" height="45" />
    <rect x="0" y="422" rx="0" ry="0" width="97" height="34" />
  </ContentLoader>
);

export default Skeleton;
