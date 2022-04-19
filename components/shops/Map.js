import React from 'react';


function ShopsMap() {
  return (
    <div className="map_container">

      <div style={{ width: '100%', height: '400px' }}>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=+(mankan%20%20mankan.am)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}

export default ShopsMap;
