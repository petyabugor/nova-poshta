import React from 'react';
import ContentLoader from 'react-content-loader';

const OfficesSceleton = (props) => (
   <ContentLoader
      speed={3}
      width="100%"
      height="100%"
      viewBox="0 0 1400 61"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <rect
         x="380"
         y="251"
         rx="5"
         ry="5"
         width="150"
         height="42"
      />
      <rect
         x="0"
         y="0"
         rx="0"
         ry="0"
         width="1400"
         height="60"
      />
   </ContentLoader>
);

export default OfficesSceleton;
