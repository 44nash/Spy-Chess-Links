import React from 'react';
import AdSense from 'react-adsense';


const AdComponent = () => {
  return (
    <AdSense.Google
      client="ca-pub-4602768180708402" // Replace with your AdSense publisher ID
      slot="8195863757" // Replace with your AdSense ad unit ID
    />
  );
};

export default AdComponent;
