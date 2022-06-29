import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="game"
    speed={2}
    width={245}
    height={307}
    viewBox="0 0 245 307"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="4" ry="4" width="245" height="160" />
    <rect x="0" y="174" rx="4" ry="4" width="245" height="30" />
    <rect x="0" y="230" rx="4" ry="4" width="245" height="30" />
    <rect x="0" y="275" rx="4" ry="4" width="80" height="32" />
    <rect x="182" y="275" rx="4" ry="4" width="60" height="32" />
  </ContentLoader>
);

export default Skeleton;
